import React from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";

export default function App(){
    return(
      <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#ff9057' barStyle='light-content' translucent={false}/>
        <View style={styles.V}>
          <Text style={styles.textTitle}>Aula Senac Bauru</Text>
        </View>
        <View style={styles.V1}>
          <Text style={styles.textTitle}>Aula Senac Bauru</Text>
        </View>
      </SafeAreaView>
    )
}

//construção da folha de estilo

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  textTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#EB0602',
  },
  V: {
    alignItems: 'center'
  },
  V1: {
    alignItems: 'flex-end'
  }
})