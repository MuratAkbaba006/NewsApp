import React from 'react'
import {SafeAreaView,Text,View,StyleSheet,Image,TouchableWithoutFeedback} from 'react-native'
import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle'
const BlockCard = ({style,imageStyle,item,onPress}) => {
    const {thumbnail,title,desc}=item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container,style]}>
                <Image source={{uri:thumbnail}} style={[styles.image,imageStyle]}/>
                <View style={styles.content}>
                    <Title>{title}</Title>
                    <SubTitle>{desc}</SubTitle>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:300,
        borderRadius:8,
        overflow:'hidden',
        backgroundColor:'#fff',
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
        width:'100%',
        height:200
    },
    content:{
        padding:5
    }
})

export default BlockCard
