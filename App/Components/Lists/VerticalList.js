import React from 'react'
import { SafeAreaView,View,TextInput,StyleSheet,Dimensions,FlatList} from 'react-native'
import Title from '../Common/Title'
import VerticalCard from '../Cards/VerticalCard'
import { useNavigation } from '@react-navigation/native'

const VerticalList = ({title,data}) => {
    const navigation=useNavigation();
    
    return (
        <View key={data.id} style={{marginTop:10}}>
            {title && <Title>{title}</Title> }
            <View style={styles.container}>
                {data.map(item => <VerticalCard item={item} key={item.id} onPress={()=>navigation.navigate('NewsDetail',{item})}/>)}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginBottom:15
    }
 })

export default VerticalList
