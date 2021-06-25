import React from 'react'
import {View,SafeAreaView,StyleSheet} from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import NewsList from '../Lists/NewsList'
import Home from '../Screens/Home'
import NewsDetail from '../Screens/NewsDetail'

const AppStack=createStackNavigator()

const AppNavigator = () => {
    return (
        <AppStack.Navigator screenOptions={{
            headerTransparent:true,
            headerTitle:'',
            headerTintColor:'white',
            headerLeftContainerStyle:{
                width:40,
                height:40,
                borderRadius:20,
                backgroundColor:'rgba(92,90,91,0.7)',
                justifyContent:'center',
                alignItems:'center',
                margin:10
            }
        }}>
            <AppStack.Screen options={{headerShown:false}} name='Home' component={Home}/>
            <AppStack.Screen name='NewsDetail' component={NewsDetail}/>
            <AppStack.Screen name='NewsList' component={NewsList}/>
        </AppStack.Navigator>
    )
}

const styles=StyleSheet.create({

})
export default AppNavigator
