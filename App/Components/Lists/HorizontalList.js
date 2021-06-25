import React from 'react'
import { SafeAreaView,View,TextInput,StyleSheet,Dimensions,FlatList} from 'react-native'
import Title from '../Common/Title'
import SmallCard from '../Cards/SmallCard'
import {useNavigation} from '@react-navigation/native'
const HorizontalList = ({title,data}) => {
    const navigation=useNavigation();
    return (
        <>
        <Title size={20} >{title}</Title>
        <View styles={styles.list}>
        <FlatList 
            data={data}
            keyExtractor={item=>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item})=><SmallCard onPress={()=>navigation.push('NewsDetail',{item})} item={item}/>}
        />
        </View>
        </>
    )
}

//burada SmallCard'ın onPress metodunda normalde yönlendirme işlemi
//için navigation.navigate('NewDetails') şeklinde bir kullanım yapıyorduk
//ancak bu şekilde yaptığımız sadece bir kere yönlendirme yapar,bu sebeple
//releated news'e tıkladığımızda ayrıntıları göremeyiz navigate.push diyerek
//bu problemi aştık

const styles=StyleSheet.create({
   list:{
       marginVertical:15
   }
})

export default HorizontalList
