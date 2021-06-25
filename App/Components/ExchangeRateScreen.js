import React from 'react'
import {View,SafeAreaView,Text,FlatList,StyleSheet} from 'react-native'
const ExchangeRateScreen = ({data}) => {
    console.log(data);
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>{
                    return (
                        <View style={styles.item}>
                            <Text style={styles.text}>{item.name}/TRY</Text>
                            <Text style={styles.text}>{item.price}</Text>
                        </View>

                    )
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        borderRadius:10,
        backgroundColor:'#CAF7EC',
        overflow:'hidden',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        marginBottom:5
    },
    item:{
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderColor:'grey',
        borderRadius:5

    },
    text:{
        justifyContent:'center',
        textAlign:'center',
        fontSize:13,
        fontWeight:'700'
    }
})
export default ExchangeRateScreen
