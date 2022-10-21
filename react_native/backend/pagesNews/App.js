import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';
import TabNews from './src/pages/dashboard/TabNews';
import { AuthProvider } from './src/contexts/Auth';
import { NewsProvider } from './src/contexts/NewsContext';

export default function App() {
  return (
    <AuthProvider>
  <NavigationContainer>
      <NewsProvider>        
          <Routes />
      </NewsProvider>
  </NavigationContainer>
    </AuthProvider>
  );
}

