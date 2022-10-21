import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import DrawerRoutes from './src/routes/DrawerRoutes';
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="#ff7e01" barStyle='light-content' translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FBDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
})