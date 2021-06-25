import React from 'react'
import { SafeAreaView,View,TextInput,StyleSheet} from 'react-native'
import HorizontalList from './Lists/HorizontalList'

const TechNews = ({data}) => {
    return (
        <HorizontalList title="Tech News" data={data}/>
    )
}

const styles=StyleSheet.create({
    container:{}
})

export default TechNews
