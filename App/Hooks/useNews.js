import React,{useState,useEffect} from 'react'
import NewsApi from '../api/NewsApi'
const useNews = () => {
    const [allnews,setAllnews]=useState([]);
    const [featuredNews,setFeaturedNews]=useState({});
    const [breakingNews,setBreakingNews]=useState([]);
    const [politicalNews,setPoliticalNews]=useState([]);
    const [techNews,setTechNews]=useState([]);
    const [entertainmentNews,setEntertainmentNews]=useState([]);
    const [sportNews,setSportNews]=useState([]);
    const [scienceNews,setScienceNews]=useState([]);
    const qty=5;
    //her kategoride kaç tane haber göstermek istediğimizin sayısı
    const [loading,SetLoading]=useState(false)
    const filterFeatured = (data) =>{
      return [...data].filter(item => item.featured==='on').reverse()[0];
      //featured news olarak eklenmiş haberleri terse çevirerek ilk elemanı
      //aldık böylece son eklenen haberi almış olduk.
    }
  
    const filterByCategory = (data,category)=>{
       const result =data.filter(item => item.category===category).reverse().splice(0,qty);
      //en son eklenen kaç haberi göstermek istiyoruz.
       if(result.length){
          result.push({type:'viewMore',category:category,id:category})
       } 
       return result;
    }
  
    const filterMultipleNews =async () => {
        SetLoading(true);
        const allNews=await NewsApi.getAll();
        
        
          setFeaturedNews(filterFeatured(allNews));
          setBreakingNews(filterByCategory(allNews,'breaking-news'));
          setPoliticalNews(filterByCategory(allNews,'political'));
          setTechNews(filterByCategory(allNews,'tech'));
          setEntertainmentNews(filterByCategory(allNews,'entertainment'));
          setSportNews(filterByCategory(allNews,'sport'));
          setScienceNews(filterByCategory(allNews,'science'));
          

          SetLoading(false);
        setTimeout(() => {
          setAllnews(allNews);
        }, 200);
       
      
   
    }
  
    useEffect(()=>{
      
       filterMultipleNews();
      
  
  
    },[])

    
   
    return [allnews,
        politicalNews,
        featuredNews,
        techNews,
        entertainmentNews,
        breakingNews,
        sportNews,
        scienceNews,
        loading
      ]
}

export default useNews