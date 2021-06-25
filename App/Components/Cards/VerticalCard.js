import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import FlatCard from './FlatCard'
import ViewMore from './ViewMore'
import NewsApi from '../../api/NewsApi'
import { useNavigation } from '@react-navigation/native'
const VerticalCard = ({item,onPress}) => {
    const navigation=useNavigation();
    
    const handleViewMore = async category => {
        const result=await NewsApi.getByCategory(category);
        navigation.navigate('NewsList',result);
    }

    if(item.type==='viewMore'){
        return <ViewMore onPress={()=>handleViewMore(item.category)}/>
    }
    return (
       <FlatCard item={item} onPress={onPress}/>
    )
}

const styles=StyleSheet.create({

})
export default VerticalCard
