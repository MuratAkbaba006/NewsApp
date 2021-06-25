import React from 'react'
import {View,Text,StyleSheet,Image,TouchableWithoutFeedback} from 'react-native'
import Title from '../Common/Title';
import SubTitle from '../Common/SubTitle';

const FlatCard = ({item,onPress}) => {
    const {thumbnail,title,desc}=item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} key={item.id}>
                <Image source={{uri:thumbnail}} style={styles.image}/>
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
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:8,
        overflow:'hidden',
        marginBottom:10,
        height:80,
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
        flex:0.35,
        height:'100%'
    },
    content:{
        flex:0.65,
        paddingHorizontal:5
    }
})

export default FlatCard
