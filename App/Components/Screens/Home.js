import React,{useState} from 'react'
import {View,SafeAreaView,StyleSheet,StatusBar,ScrollView} from 'react-native'
import SearchBar from '../SearchBar';
import ExchangeRate from '../../api/ExchangeRate';
import CategoryIcon from '../CategoryIcon';
import FeaturesNews from '../FeaturesNews';
import BreakingNews from '../BreakingNews';
import PoliticalNews from '../PoliticalNews';
import TechNews from '../TechNews';
import SportNews from '../SportNews';
import ScienceNews from '../ScienceNews'
import EntertainmentNews from '../EntertainmentNews';
import useNews from '../../Hooks/useNews';
import ActivityIndicator from '../Common/ActivityIndicator';

const Home = () => {
    const [isSearchFocused,setIsSearchFocused]=useState(false)
    const keyboardShouldPersistTaps= isSearchFocused ? 'always':'never';

    
    const [
        allnews,
        politicalNews,
        featuredNews,
        techNews,
        entertainmentNews,
        breakingNews,
        sportNews,
        scienceNews,
        loading]=useNews();

        
    
     
      return (
        <React.Fragment>
           <ActivityIndicator visible={loading}/>
          {allnews.length !==0 &&
          
        <ScrollView keyboardShouldPersistTaps={keyboardShouldPersistTaps} scrollEnabled={!isSearchFocused} style={style.container}>
            <SearchBar setIsSearchFocused={setIsSearchFocused}/>
            <CategoryIcon/>
            <FeaturesNews item={featuredNews}/>
            <ExchangeRate/> 
            <BreakingNews data={breakingNews}/>
            <PoliticalNews data={politicalNews}/>
            <TechNews data={techNews}/>
            <EntertainmentNews data={entertainmentNews}/>
            <SportNews data={sportNews}/>
            <ScienceNews data={scienceNews}/>
           
        </ScrollView>
        
    }
        </React.Fragment>
        
        
      );
}

const style=StyleSheet.create({
    container:{
      flex:1,
      marginTop:StatusBar.currentHeight,
      backgroundColor:'#f7f3f3',
      paddingHorizontal:15,
      
    }
  })
  

export default Home
