import React from 'react'
import { SafeAreaView,View,TextInput,StyleSheet} from 'react-native'
import HorizontalList from './Lists/HorizontalList'

const BreakingNews = ({data}) => {
    return (
        <HorizontalList title="Breaking News" data={data}/>
    )
}

const styles=StyleSheet.create({
    container:{}
})

export default BreakingNews
