import React from 'react'
import {View,SafeAreaView,StyleSheet,StatusBar,Text,ScrollView} from 'react-native'
import VerticalList from './VerticalList';
const NewsList = ({route}) => {
    const data=route.params;
    const header=data[0].category.split('-').join(' ').toUpperCase();
    //kategori ismi breaking-news şeklinde olabileceği için aradaki bu
    //- işaretini kaldırıp büyük harfe çevirdik.
    return (
        <>
        <View style={styles.header_container}>
            <Text style={styles.category_title}>{header}</Text>
        </View>
        <ScrollView contentContainerStyle={{padding:15}}>
            <VerticalList data={data}/>
        </ScrollView>
        </>
    )
}

const styles=StyleSheet.create({
    header_container:{
        width:'100%',
        height:100,
        justifyContent:'center',
        alignItems:'center',
        marginTop:StatusBar.currentHeight,
        backgroundColor:'#4e4d4d'

    },
    category_title:{
        fontSize:30,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'white'
    }
})

export default NewsList
