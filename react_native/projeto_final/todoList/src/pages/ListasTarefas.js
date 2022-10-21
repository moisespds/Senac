import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Buttons from '../components/Button';
import Inputs from '../components/Inputs'

export default function ListasTarefas() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text style={styles.title}>Lista de Tarefas!!!</Text>
        <View style={{flexDirection: 'row', justifyContent:'space-around',}}>
          <Inputs style={styles.inputs} placeholder='Adicione uma Tarefa'/>
          <Buttons style={styles.buttonAdicionar} styleTxt={styles.buttonTxtA} buttonName='Adicionar' />
          <Buttons style={styles.buttonRemover} styleTxt={styles.buttonTxtR} buttonName='Remover' />
        </View>
      </View>
      <ScrollView>
      <View style={styles.lista}>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Planejamento do app</Text>
        </View>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Organização do app</Text>
        </View>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Divisao do app</Text>
        </View>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Implementaçao do app</Text>
        </View>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Fazer a Logica</Text>
        </View>
        <View style={styles.listaItem}>
          <Text style={styles.txtLista}>Estilizar</Text>
        </View>
        <View style={styles.listaItem}>  
          <Text style={styles.txtLista}>Acabamentos Finais</Text>
        </View>
      </View>
      </ScrollView>
        <View style={styles.tab}>
          <Buttons style={styles.button} styleTxt={styles.buttonTxt} buttonName='T'/>
          <Buttons style={styles.button} styleTxt={styles.buttonTxt} buttonName='C'/>
          <Buttons style={styles.button} styleTxt={styles.buttonTxt} buttonName='P'/>
          <Buttons style={styles.button} styleTxt={styles.buttonTxt} buttonName='F'/>
          <Buttons style={styles.button} styleTxt={styles.buttonTxt} buttonName='E'/>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBC12C',
  },
  tab:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: 80,
    backgroundColor: '#000',
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  lista:{
    flex: 1,
  },
  listaItem:{
    height: 60,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  header:{
    width: '100%',
    height:300,
    backgroundColor: '#000',
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  buttonAdicionar:{
    width: '17.5%',
    height: 40,
    backgroundColor: '#35B9FF',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxtA:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  buttonRemover:{
    width: '17.5%',
    height: 40,
    backgroundColor: '#f00',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxtR:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  button:{
    width: 60,
    borderWidth: 1,
    marginTop: 30,
  },
  buttonTxt:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff'
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  txtLista:{
    fontSize: 20,
    fontWeight: '700',
  },
  inputs:{
    width: '65%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#CACACA'
}
});
