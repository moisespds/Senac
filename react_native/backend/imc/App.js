import React from 'react';
import { useState } from 'react';
import { TextInputMask } from 'react-native-masked-text'
import { StyleSheet, Text, View, StatusBar, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function App() {
  const [ peso, setPeso ] = React.useState()
  const [ altura, setAltura ] = React.useState()
  const [ resultado,  setResultado ] = React.useState()
  const [ avaliar, setAvaliar ] = React.useState()
  const [ cor, setCor ] = React.useState()

  const calc = () => {
    let res =  peso / (altura * altura)
    setResultado(res.toFixed(2))
    if(res < 18.5){
      setAvaliar('Abaixo do Peso!')
      setCor("red")
    }else if(res < 25.9){
      setAvaliar('Peso Normal!')
      setCor("green")
    }else if(res < 29.9){
      setAvaliar('Sobrepeso!')
      setCor("yellow")
    }else if(res < 34.9){
      setAvaliar('Obesidade Nivel 1!')
      setCor("orange")
    }else if(res < 39.9){
      setAvaliar('Obesidade Nivel 2!')
      setCor("red")
    }else{
      setAvaliar('Obesidade Nivel 3!')
      setCor("purple")
    }
}



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.title}>Calculadora IMC</Text>
        </View>
      <View style={styles.viewC}>
        <View style={styles.viewInputs}>
          <View style={styles.viewPeso}>
            <Text style={styles.txt}>Peso:</Text>
            <TextInputMask
  type={'money'}
  options={{
    precision: 2,
    separator: '.',
    delimiter: ',',
    unit: '',
    suffixUnit: ''
  }}  style={styles.inputs} placeholder={'Digite o Peso'} onChangeText={setPeso} value={peso}/>
          </View>
          <View style={styles.viewAlt}>
            <Text style={styles.txt}>Altura:</Text>
            <TextInputMask
  type={'money'}
  options={{
    precision: 2,
    separator: '.',
    delimiter: ',',
    unit: '',
    suffixUnit: ''
  }} style={styles.inputs} placeholder={'Digite a Altura'} onChangeText={setAltura} value={altura}/>
          </View>
        </View>
        <View style={styles.viewResult}>
          <TouchableOpacity style={styles.button} onPress={() => calc()}><Text style={styles.txt}>Calcular</Text></TouchableOpacity>
          <Text style={styles.title}>Resultado:</Text>
          <Text style={styles.result}>{resultado}</Text>
          <Text style={[styles.result, {backgroundColor: cor} ]}>{avaliar}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewC:{
    padding: 20
  },
  header:{
    width: '100%',
    height: 70,
    justifyContent: 'top',
    alignItems: 'center',
    marginBottom: 50,
  },
  viewInputs:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30
  },
  viewPeso:{
    flexDirection: 'column'
  },
  viewAlt:{
    flexDirection: 'column'
  },
  viewResult:{
    justifyContent:'center',
    alignItems: 'center'
  },
  title:{
    fontSize: 45,
    fontWeight: 'bold'
  },
  txt:{
    fontSize: 25,
    paddingLeft: 15,
    paddingBottom: 5,
    fontWeight: 'bold'
  },
  button:{
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  result:{
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 30
  },
  inputs:{
    width: 150,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10
  }
});
