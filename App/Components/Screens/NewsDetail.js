import React,{useState,useEffect} from 'react'
import {ScrollView,StyleSheet,Image,View,Text,Dimensions} from 'react-native'
import NewsApi from '../../api/NewsApi'
import HorizontalList from '../Lists/HorizontalList'
import Close from '../Common/Close'
import { useNavigation } from '@react-navigation/native'
import ActivityIndicator from '../Common/ActivityIndicator'
const {width,height}=Dimensions.get('window')

const NewsDetail = ({route}) => {
    const [news,setNews]=useState({});
    const [relatedNews,setRelatedNews]=useState([])
    const {id:postId,category:postCategory} = route.params.item
    const [loading,setLoading]=useState(false);

    const navigation =useNavigation();

    const fetchPost = async (id) =>{
        setLoading(true);
        const result = await NewsApi.getSingleNew(id);
        setNews(result);
    }

    const fetchRelatedPosts = async (category) =>{
        const result=await NewsApi.getByCategory(postCategory,6)
        setRelatedNews(result.filter(item=>item.id !==postId));
        //bir haberin detayına tıklandığında benzer haberlerde aynı haberin
        //gözükmemesi adına filtreleme yaptık.
        setLoading(false);
    }

    useEffect(()=>{
        fetchPost(postId);
        fetchRelatedPosts(postCategory);
    },[])
    
    const {title,content,thumbnail,date} = news;
    return (
        <>
        <ActivityIndicator visible={loading}/>
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{uri:thumbnail}}/>
            <Text style={{justifyContent:'flex-end',textAlign:'right'}}>{date}</Text>
            <View style={styles.content_area}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{content}</Text>
            
            </View>
            <View style={styles.relatednews_area}>
                <HorizontalList data={relatedNews} title='Related Posts' />
            </View>
        </ScrollView>
        <Close onPress={()=>navigation.popToTop()}/>
        </>
    )
}


//navigation.popToTop metoduyla Home sayfasına geri döner
const styles=StyleSheet.create({
    container:{},
    image:{
        width:width,
        height:height/3
    },
    content_area:{
        padding:10,

    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10
    },
    content:{
        fontSize:16,
        color:'#4e4d4d'
    },
    relatednews_area:{
        padding:10
    }
})

export default NewsDetail
