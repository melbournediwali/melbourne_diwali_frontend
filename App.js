import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/authScreens/login';
import Signup from './src/screens/authScreens/signup';
import Splash from './src/screens/authScreens/splash';


const Stack = createNativeStackNavigator();

const App = () =>{
  return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
    <NavigationContainer> 
      
      <Stack.Navigator initialRouteName='splash'>
      <Stack.Screen  name='Splash' component ={Splash} />
        <Stack.Screen name='Login' component ={Login} />
        <Stack.Screen name='Signup' component ={ Signup } />
      </Stack.Navigator>
         
    </NavigationContainer>
    </SafeAreaView>
  )
}

export default App;