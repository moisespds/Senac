import React from "react";
import { useState } from 'react'
import { SafeAreaView, StyleSheet, StatusBar, Text, View, TextInput, TouchableOpacity, } from "react-native"

export default function App(){

  const [ valor1, setValor1 ] = React.useState(0)
  const [ valor2, setValor2 ] = React.useState(0)
  const [ resultado, setResultado ] = React.useState()
  
  const somar = () => {
   let res = Number(valor1) + Number(valor2)
    setResultado(res)
  }
  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#ff7e0' barStyle='light-content' translucent={false} />
      <View style={styles.viewContainer}>
        <Text style={styles.textHeader}>Campos do formulario</Text>
        <TextInput style={styles.input} onChangeText={setValor1} placeholder="Digite o 1° valor" placeholderTextColor='#ffffff' keyboardType='numeric' />
        <TextInput style={styles.input} onChangeText={setValor2} placeholder="Digite o 2° valor" placeholderTextColor='#ffffff' keyboardType='numeric' />
        <TouchableOpacity style={styles.button} onPress={somar}><Text style={styles.textButton}>Enviar</Text></TouchableOpacity>
          <Text style={styles.resultado}>{resultado}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 20,
    alignItems: 'center'
  },
  viewContainer:{
    width: '90%'
  },
  textHeader:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input:{
    backgroundColor: '#009cff',
    marginTop: 15,
    height: 40,
    borderRadius: 8,
    textAlign: 'center',
    color: '#ffffff'
  },
  button:{
    marginTop: 30,
    backgroundColor: '#ff1d2b',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButton:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  },
  resultado:{
    height: 40,
    backgroundColor: '#5EFC28',
    textAlign: 'center',
    borderRadius: 8,
    marginTop: 15,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
})