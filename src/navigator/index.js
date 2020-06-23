import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import '../config/StatusBarConfig';
import Home from '../pages/HomeScreen/index';
import Preload from '../pages/PreloadScreen/index';
import Cadastro from '../pages/CadastroScreen/index';
import Login from '../pages/LoginScreen/index';
import Caixa from '../pages/CaixaScreen/index';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Preload"
          component={Preload}
          options={{
            headerShown: false,
            headerStyle: {backgroundColor: '#a303c3'},
            headerTintColor: '#000000',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            headerStyle: {backgroundColor: '#a303c3'},
            headerTintColor: '#000000',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerStyle: {backgroundColor: '#a303c3'},
            headerTintColor: '#000000',
          }}
        />
        <Stack.Screen
          name="Caixa"
          component={Caixa}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
