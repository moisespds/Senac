import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#ff7e01" barStyle='light-content' translucent={false} />
        <Routes />
    </NavigationContainer>
  );
}