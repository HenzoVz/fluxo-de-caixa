import 'react-native-gesture-handler';


import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/HomeScreen';
import Preload from './src/pages/PreloadScreen';
import Cadastro from './src/pages/CadastroScreen';
import Login from './src/pages/LoginScreen';
import Interna from './src/pages/InternaScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload} options={{headerShown: false, headerStyle: {backgroundColor : '#FFFF00'}, headerTintColor: '#000000'}} />
        <Stack.Screen name="Interna" component={Interna} options={{headerStyle: {backgroundColor : '#FFFF00'}, headerTintColor: '#000000'}}/>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerStyle: {backgroundColor : '#FFFF00'}, headerTintColor: '#000000'}} />
        <Stack.Screen name="Login" component={Login} options={{headerStyle: {backgroundColor : '#FFFF00'}, headerTintColor: '#000000'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
