import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, TouchableOpacity, ScrollView, } from 'react-native';

export default function App() {
  const [ numero, setNumero ] = React.useState()
  const [ listaNumeros, setListaNumeros] = React.useState([])
  const [ soma, setSoma] = React.useState()
  const [ media, setMedia ] = React.useState()
  const [ maior, setMaior ] = React.useState()
  const [ menor, setMenor ] = React.useState()
  const valor = +numero
  // const nMaior = +maior
  // const nMenor = +menor
  
  const adicionar = () => {
    setListaNumeros([...listaNumeros, valor])
    setNumero('')

    // if(maior == undefined || valor > maior) setMaior(valor)

    // if(menor == undefined || valor < menor) setMenor(valor)
  }

  React.useEffect(() => {
    let sum = 0;
    listaNumeros.forEach((item) => {
      sum += item
    })
    setSoma(sum);

  },[listaNumeros]);

 // React.useEffect(() => {
 //   const criarMedia = (m) => {
 //     return m = soma / listaNumeros.length
//}
  //  setMedia(criarMedia)
 // },[listaNumeros]);
  
  React.useEffect(() => {
    const criarMedia = (m) => {
      return m = soma / listaNumeros.length
    }
    setMedia(criarMedia)
},[soma]);

  React.useEffect(() => {
    if(maior == undefined || valor > maior) setMaior(valor)
  },[listaNumeros])

  React.useEffect(() => {   
    if(menor == undefined || valor < menor) setMenor(valor)
 },[listaNumeros])


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.textTitulo}>Planilha:</Text>
      <View style={styles.containerHeader}>
        <TextInput style={styles.input} placeholder='Valor' onChangeText={setNumero} value={numero}/>
        <TouchableOpacity style={styles.button} onPress={() => adicionar()}><Text style={styles.textButton}>+</Text></TouchableOpacity>
      </View>
      <ScrollView>
        { listaNumeros.map((numero) => (
          <View style={styles.containerLista}>
            <Text style={styles.textLista}>{ numero }</Text>
          </View>
        )) }
      </ScrollView>
      <View style={styles.containerResultado}>
        <View style={styles.containerSomaMedia}>
          <Text style={styles.textTituloResultado}>Soma:</Text>
          <Text style={styles.textResultado}>{soma}</Text>
          <Text style={styles.textTituloResultado}>Média:</Text>
          <Text style={styles.textResultado}>{media}</Text>
        </View>
        <View style={styles.containerMaiorMenor}>
          <Text style={styles.textTituloResultado}>Maior:</Text>
          <Text style={styles.textResultado}>{maior}</Text>
          <Text style={styles.textTituloResultado}>Menor:</Text>
          <Text style={styles.textResultado}>{menor}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5,
  },
  containerHeader:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerListaNumeros:{
    flex: 1,
    padding: 10,
  },
  containerLista: {
    padding: 10,
    justifyContent: 'flex-start',
  },
  containerResultado:{
    flexDirection: 'column',
  },
  containerSomaMedia:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  containerMaiorMenor:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  textTitulo:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 20,
  },
  textLista:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  textTituloResultado:{
    fontSize: 25,
    fontWeight: 'bold'
  },
  textResultado:{
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  input:{
    width: 300,
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginRight: 15,
  },
  button:{
    width: 50,
    height: 50,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton:{
    fontSize: 25,
    fontWeight: 'bold'
  }
});
