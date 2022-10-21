import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LogIn from '../pages/LogIn';
import SignIn from '../pages/SignIn';
import PassRecover from '../pages/PassRecover';
import DrawerRoutes from './DrawerRoutes';
import Inicio from '../pages/Inicio';

export default function Routes() {

    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerRoutes" component={DrawerRoutes} options={{headerShown: false }}/>
            <Stack.Screen name="Inicio" component={Inicio} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }} />
        <Stack.Screen name='LogIn' component={LogIn} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
        <Stack.Screen name='SignIn' component={SignIn} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
        <Stack.Screen name='PassRecover' component={PassRecover} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
    </Stack.Navigator>
  );
}