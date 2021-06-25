import React from 'react'
import VerticalList from './Lists/VerticalList'
const PoliticalNews = ({data}) => {
    return (
        <VerticalList title='Political News' key={data.id} data={data}/>
    )
}

export default PoliticalNews
