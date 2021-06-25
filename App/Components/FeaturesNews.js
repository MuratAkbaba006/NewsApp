import React from 'react'
import BlockCard from './Cards/BlockCard'
import { useNavigation } from '@react-navigation/native'
const FeaturesNews = ({item}) => {
    const navigation=useNavigation();
    return (
        <>
        {item &&
        <BlockCard onPress={()=>navigation.navigate('NewsDetail',{item})} 
            item={item} style={{marginVertical:15}}/>
        }
        </>
        )
}

export default FeaturesNews
