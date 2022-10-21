import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/Routes'
import { AuthProvider } from './context/Auth';

export default function App() {
  return (
      <AuthProvider>
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
      </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
