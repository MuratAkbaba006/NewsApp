import React,{useState,useEffect} from 'react'
import { SafeAreaView,View,TextInput,StyleSheet} from 'react-native'
import SearchModel from './Common/SearchModel';
import NewsApi from '../api/NewsApi';

let timeOutId;
const debounce = (func,delay) => {
    //bu fonksiyon searchbarda her bir harfe bastığımızda
    //apiye istek gitmemesi için,kullanılıyor kullanıcı arama
    //yapmak üzere bir tuşa bastığında 0.5 saniye içerisinde
    //tekrar basarsa timeout sıfırlanıyor yani ilk harf için istek
    //gönderilmiyor kullanıcı aramak istediği kelimeyi girdiğinde
    //0.5 saniye sonra apiye istek gitmiş olur 
    return (...args)=>{
        if(timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
           func.apply(null,args) 
        }, delay);
    }
}
const SearchBar = ({setIsSearchFocused}) => {

    const [query,setQuery] = useState('');
    const [visible,setVisible] =useState(false);
    const [data,setData]=useState([]);
    const [notFound,setNotFound]=useState('');

    const handleChange = ({nativeEvent}) => {
        const {text}=nativeEvent;
        setQuery(text);
        setVisible(true);
        debounceSearch(query);
    }
    
    const handleSearch = async (value) => {
        const res = await NewsApi.searchPost(value);
        if(res.success){
            setNotFound('');
            setData(res.news);
        }
        if(!res.success){
            setNotFound(res.message);
        }
    }

    const debounceSearch = debounce(handleSearch,500);


    return (
        <>
        <View style={style.container}>
            <TextInput value={query} 
                       style={style.text_input} 
                       placeholder='Search ...'
                       onChange={handleChange}
                       onFocus={()=>{
                           setIsSearchFocused(true);
                       }}
                       onBlur={()=>{
                           setIsSearchFocused(false);
                           setQuery('');
                           setVisible(false);
                           setData([]);
                           setNotFound('')

                       }}
                       />
        </View>
        <SearchModel visible={visible} data={data} notFound={notFound}/>
        </>
    )
}

const style=StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'#CAF7EC',
        borderRadius:8,
        marginBottom:5,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text_input:{
        width:'100%',
        height:'100%',
        paddingLeft:8,
        fontSize:16
    }
})

export default SearchBar;