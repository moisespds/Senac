import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NotaContext } from './src/context/Notas';

import { NotasProvider } from './src/context/Notas'
import PagesNotas from './src/pages/PagesNotas';

export default function App() {
  return (
    <NotasProvider>
      <SafeAreaView>
        <StatusBar style='auto'/>
        <PagesNotas/>
      </SafeAreaView>
    </NotasProvider>
  );
}
