import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'

import ListasTarefas from '../pages/ListasTarefas';
import ListasCompras from '../pages/ListasCompras';
import Option from '../pages/Options';

export default function DrawerRoutes() {

    const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator>
        <Drawer.Screen name="ListasTarefas" component={ListasTarefas} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
        <Drawer.Screen name="ListasCompras" component={ListasCompras} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
        <Drawer.Screen name="Option" component={Option} options={{
        headerStyle:{backgroundColor:'#46696E', }, headerTitleStyle:{fontSize:30, fontWeight:'bold'}
      }}/>
    </Drawer.Navigator>
  );
}