import React from 'react'
import { useState, } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [alt, setAlt] = React.useState()
  const [base, setBase] = React.useState()
  const [resutado, setResult] = React.useState()
  const calc = () => {
   let res = (base * alt) / 2
    setResult(res)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Area do Triangulo</Text>
      </View>
      <View style={styles.cont}>
      <View style={styles.vInputs}>
        <View style={styles.vValores}>
          <Text style={styles.txt}>Base:</Text>
          <TextInput style={styles.input} placeholder='Digite a Base' placeholderTextColor={'#000'}
           value={base}
           onChangeText={setBase}
           keyboardType="numeric"/>
        </View>
        <Text style={styles.x}> X </Text>
        <View style={styles.vValores}>
          <Text style={styles.txt}>Altura:</Text>
          <TextInput style={styles.input} placeholder='Digite a Altura'  placeholderTextColor={'#000'}    
          value={alt}
          onChangeText={setAlt}
          keyboardType="numeric"/>
        </View>
      </View>
      <View style={styles.cButton}>
       <TouchableOpacity
        style={styles.button}
        onPress={() => calc()}
      >
        <Text style={styles.calculo}>Calcular</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.vResult}>
        <Text style={styles.title}>Resultado:</Text>
        <Text style={styles.result}>{ resutado }</Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034159',
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#025951',
    marginBottom: 100,
    alignContent: 'center'
  },
  vInputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#0CF25D',
    width: 300,
    height: 60,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    width: "100%",
    height: 50,
    padding: 10,
    borderColor: '#038C3E',
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#02735E'
  },
  txt: {
    fontSize: 25,
    paddingLeft: 15,
    color: '#0CF25D',
  },
  title:{
    fontSize: 45,
    fontWeight: 'bold',
    color: '#0CF25D'
  },
  result: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#0CF25D'
  },
  cButton: {
    marginBottom: 50,
    alignItems: 'center',
  },
  vValores: {
    width: "150px"
  },

  vResult: {
    alignItems: 'center',
    marginBottom: 50,
  }, 
  x: {
    textAlign: "center",
    fontSize: 35,
    fontWeight: 'bold',
    color: '#0CF25D'
  },
  cont: {
    padding: 10,
  },
  calculo: {
    fontSize: 25,
    fontWeight: 'bold',
  }
});
