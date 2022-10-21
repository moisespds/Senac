import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';

import Footer from './src/components/Footer';
import Header from './src/components/Header';
import { AuthProvider } from './src/contexts/Auth';
import HomePage from './src/pages/HomePage';

export default function App() {
  return (
    <AuthProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style='auto'/>
        <Header/>
        <HomePage/>
        <Footer/>
      </SafeAreaView>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
