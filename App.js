import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, StatusBar,ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './App/Components/Navigation/AppNavigator';

export default function App() {
  return(
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  )
  
}


