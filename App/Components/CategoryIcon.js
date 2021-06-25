import React from 'react'
import {View,SafeAreaView,Text,FlatList,Image,StyleSheet,TouchableOpacity} from 'react-native'
import NewsApi from '../api/NewsApi';
import { useNavigation } from '@react-navigation/native';

const data=[{category_name:'Tech',category_image:'https://besthqwallpapers.com/Uploads/7-5-2020/132494/thumb2-blue-3d-chip-4k-technology-concepts-3d-art-microchip.jpg'},
            {category_name:'Political',category_image:'https://www.voicesofyouth.org/sites/voy/files/styles/blog_teaser/public/images/2019-01/politics3.jpg?h=ae1281eb&itok=7pVud1WX'},
            {category_name:'Sport',category_image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLQPYlAFR6CDU3G6bQ63DnzUMfH5qGAajEw&usqp=CAU'},
            {category_name:'Science',category_image:'https://ucpnz.co.nz/wp-content/uploads/2021/02/introducing-simply-science-a-new-weekly-newsletter-from-the-economist.jpg'},
            {category_name:'Breaking-News',category_image:'https://image.freepik.com/free-vector/breaking-news-banner_23-2148496591.jpg'},
            {category_name:'Entertainment',category_image:'https://thumbs.dreamstime.com/b/flat-symbols-culture-arts-entertainment-colorful-background-defocused-lights-symbols-culture-arts-123059189.jpg'},

        ]
const CategoryIcon = () => {
    const navigation=useNavigation();
    const handleViewMore = async category => {
        const result=await NewsApi.getByCategory(category);
        navigation.navigate('NewsList',result);
    }
    return (
        <View >
            <FlatList data={data} showsHorizontalScrollIndicator={false} horizontal renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>handleViewMore(item.category_name.toLowerCase())}>
                        <View style={styles.container}>
                            <Image source={{uri:item.category_image}} style={styles.image} />   
                            <Text style={styles.text} numberOfLines={1}>{item.category_name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        margin:4,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    image:{
        width:70,
        height:70,
        borderRadius:80,
        resizeMode:'cover',
        borderWidth:2,
        borderColor:'#ddd',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        width:70,
        justifyContent:'center',
        textAlign:'center',
        fontSize:16,
        fontWeight:'700',
        
    }
})

export default CategoryIcon
