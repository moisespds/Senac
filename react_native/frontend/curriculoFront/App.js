import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#ff9057'} barStyle='default'translucent='false' />
      <View style={styles.Header}>
        <Image source={require("./assets/perfil.png")} style={styles.img}/>
      <View>
          <Text style={styles.textHeader}>Moises Prado da Silva</Text>
          <Text style={styles.txt}>Especialista em Redes e Segurança da informação.{'\n'}
          Desenvolvedor Full Stack WEB e Mobile.{'\n'}
           Vue, React, React Native e Flutter{'\n'}
           Apaixonado pela area de tecnolgia desde cedo com video games e com 13 anos tive meu primeiro computador em casa e comecei primeiro com games e usar mods nos jogos modificando ele mais perto da realidade com insentivo dos meus pais entrei em diversos cursos desde de informatica basica ate design de games e hardware.{'\n'}
           Mais algo que sempre me atraiu foi a area de hacking muito por causa de jogos e filme e onde me levou para area de desenvolvimento </Text>
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Header:{
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderColor: '#0000ff',
    margin: 10,
  },
  img:{
    width: 110,
    height:120,
    resizeMode: 'stretch',
  },
  textHeader:{
    fontSize: 20,
    color: '#0000ff',
    fontWeight: 'bold',
  },
  txt:{
    fontSize: 15,
    
  }
});
