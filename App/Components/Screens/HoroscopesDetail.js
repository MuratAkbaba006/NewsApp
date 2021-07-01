import React,{useState,useEffect} from 'react'
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'
import axios from 'axios'
import { FontAwesome,Ionicons,MaterialCommunityIcons,Foundation} from '@expo/vector-icons';

const {width,height}=Dimensions.get('window');

const HoroscopesDetail = (props) => {
    const item=props.route.params.item;
    console.log(item);
    const [data,setData]=useState("");
    
    
         
    useEffect(()=>{
        axios.get(`https://burcapi.herokuapp.com/get/${item.name}`).then((res)=>res.data.map((a)=>setData(a)));
        
    
    },[])
      

 
    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
           <View style={styles.item_area}>
               <Text style={styles.item_text}>{item.name}</Text>
               <Image source={item.image} style={{width:100,height:100}}/>
               <Text style={styles.item_text}>{item.date}</Text>
           </View>
           <View style={{width:width*.9}}>
               <View style={styles.motto_area}>
                    <FontAwesome style={{marginVertical:5}} name="bullhorn" size={24} color="black" />
                    <Text style={{fontSize:18,fontWeight:'700',marginLeft:20}}>{data.Mottosu}</Text>
               </View>
               <View style={styles.planet_area}>
                    <Ionicons style={{marginVertical:5}} name="planet-sharp" size={24} color="black" />
                    <MaterialCommunityIcons style={{marginVertical:5}} name="crown" size={24} color="black" />
                    <Text style={{fontSize:18,fontWeight:'700',marginLeft:20}}>{data.Gezegeni}</Text>
               </View>
               <View style={styles.interpretation}>
                    <Text style={{fontSize:18,fontWeight:'700',marginLeft:10,marginTop:5}}>{data.GunlukYorum}</Text>
               </View>
           </View>
        </View>
    )
}

const styles=StyleSheet.create({
    item_area:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:25,
        
    },
    item_text:{
        fontSize:18,
        fontWeight:'700'
    },
    motto_area:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'start',
        marginTop:10,
        marginLeft:5,
        borderColor:'#F80F4C',
        borderWidth:1,
        borderRadius:5     
        
        
    },
    planet_area:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'start',
        marginTop:10,
        marginLeft:5,
        borderColor:'#F80F4C',
        borderWidth:1,
        borderRadius:5  

    },
    interpretation:{
        marginTop:15,
        borderWidth:1,
        width:width*.9,
        height:200,
        borderRadius:10,

    }
})

export default HoroscopesDetail
