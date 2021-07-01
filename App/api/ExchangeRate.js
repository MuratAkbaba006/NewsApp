import React,{useState,useEffect} from 'react'
import {View,Text,SafeAreaView} from 'react-native'
import ExchangeRateScreen from '../Components/ExchangeRateScreen';
const ExchangeRate = () => {

    const [data,setData]=useState([]);
    const array=[];
    const  ExchangeRates = async () => {
        try {
            const parseString = await require('react-native-xml2js').parseString;
            const response = await fetch('https://www.tcmb.gov.tr/kurlar/today.xml');
            let responseXml = await response.text();
            await parseString(responseXml, function (err, result) {
                result.Tarih_Date.Currency.filter((res)=>{
                    if(res.ForexSelling && res.ForexSelling[0] !== '')
                    {
                    console.log(res.$.Kod);    
                    array.push({name:res.$.Kod,price:res.ForexSelling[0]})
                    }    
                })
            });
            setData(array);
 
        } catch (error) {
            console.log('fetch', err)
        }
    }  

    useEffect(()=>{

      ExchangeRates();

    },[])

    return (
        <ExchangeRateScreen data={data}/>
    )
}

export default ExchangeRate
