import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [idade, setIdade] = React.useState()
  const [cor, setCor] = React.useState({color: 'black'})
  const [verificar, setVerificar] = React.useState()
  
  const dMaior = () =>{
    if( idade > 17){
     setVerificar('Maior de Idade')
     setCor({color: 'black'})
  }else{
    setVerificar('Menor de Idade')
    setCor({color: 'red'})
  }
}

React.useEffect(() => {
  dMaior();
}, [idade])

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Idade:</Text>
      <TextInput style={styles.input} onChangeText={setIdade}/>
      <TouchableOpacity onPress={dMaior}><View style={styles.button}><Text style={styles.txt}>Verificar</Text></View></TouchableOpacity>
      <Text style={[styles.result, cor]}>{verificar}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  input:{
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 25
  },
  txt: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 25,
  },
  button:{
    width: 150,
    height: 80,
    backgroundColor: '#F20CDF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 20,
  },
  result: {
    fontSize: 50,

  }
});
