import React,{useState} from 'react'
import { StyleSheet, Image,Text, View,TouchableOpacity,FlatList } from 'react-native';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'


const horoscopesdata=[
    {name:'Koç',image:require('../../assets/koç.png'),date:'21 Mart-20 Nisan'},
    {name:'Boğa',image:require('../../assets/boğa.png'),date:'21 Nisan-20 Mayıs'},
    {name:'İkizler',image:require('../../assets/ikizler.png'),date:'21 Mayıs-21 Haziran'},
    {name:'Yengeç',image:require('../../assets/yengeç.png'),date:'22 Haziran-22 Temmuz'},
    {name:'Aslan',image:require('../../assets/aslan.png'),date:'23 Temmuz-22 Ağustos'},
    {name:'Başak',image:require('../../assets/başak.png'),date:'23 Ağustos-22 Eylül'},
    {name:'Terazi',image:require('../../assets/terazi.png'),date:'23 Eylül-23 Ekim'},
    {name:'Akrep',image:require('../../assets/akrep.png'),date:'24 Ekim-22 Kasım'},
    {name:'Yay',image:require('../../assets/yay.png'),date:'23 Kasım-21 Aralık'},
    {name:'Oğlak',image:require('../../assets/oğlak.png'),date:'22 Aralık-20 Ocak'},
    {name:'Kova',image:require('../../assets/kova.png'),date:'21 Ocak-18 Şubat'},
    {name:'Balık',image:require('../../assets/balık.png'),date:'19 Şubat-20 Mart'},
    
    ]

const Horoscopes = () => {


    const navigation=useNavigation();

  

    return (
        <>
        <View style={styles.container}>
          <FlatList 
          data={horoscopesdata}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item})=>{
            console.log(item);
            return (
              <TouchableOpacity onPress={()=>{
              
               
                
                    navigation.navigate('HoroscopesDetail',{
                        item:item
                    })
                
               
                }}>
              <View style={styles.item}>
                
               
                <Text style={{justifyContent:'center',textAlign:'center',fontWeight:'700'}}>{item.name}</Text>
                <Image source={item.image} style={{width:100,height:100}}/>
                <Text style={{fontWeight:'700',justifyContent:'center',textAlign:'center'}}>{item.date}</Text> 
              
                
              </View> 
              </TouchableOpacity>
            )
          }}
          />
    
        </View>
       
        </>
    )
}

export default Horoscopes

const styles=StyleSheet.create({
  container:{
    width:'100%',
    borderWidth:1,
    borderRadius:10,
    borderColor:'#ddd',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop:10
  },
  item:{
    width:110,
    height:160,
    margin:5,
    

    

  }
})
