import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
  } from 'react-native-indicators';
const ActivityIndicator = ({visible}) => {
    if(!visible) return null;
    return (
        <View style={styles.container}>
            <BarIndicator animationDuration={2000} color={'black'}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        zIndex:1
    }
})

export default ActivityIndicator
