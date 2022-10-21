import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';

export default function ListasCompras() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text>Lista Para adicionar Coisas que prescisam comprar !!!</Text>
      </View>
    </SafeAreaView>
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
