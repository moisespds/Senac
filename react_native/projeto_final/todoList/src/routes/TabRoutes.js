import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from '../pages/Home';

export default function TabRoutes() {

    const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}