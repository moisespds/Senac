import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

import Experiencias from '../components/Experiencias';
import Header from '../components/Header';
import Info from '../components/Info';
import Formacao from '../components/Formacao';
import Idiomas from '../components/Idiomas';
import Habilidades from '../components/Habilidades';

export default function CurriculoPage() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Info titulo="Informações pessoais:" infos={[

        {
          titulo: "Telefone:",
          texto: "(14)9 9999-9999"
        },
        {
          titulo: "E-mail:",
          texto: "moises.psilva5@senacsp.edu.com"
        },
        {
          titulo: "Github:",
          texto: "www.github.com/moisespds/repositories"
        },
        {
          titulo: "LinkedIn:",
          texto: "moises Prado"
        },
        {
          titulo: "Data de Nascimento:",
          texto: "26/09/1999"
        },
        {
          titulo: "Nacionalidade:",
          texto: "Brasileiro"
        },
        {
          titulo: "Endereço:",
          texto: "Rua Getulio Vargas 1-71 jd. Contorno"
        }
      ]} />
      <Experiencias/>
      <Formacao/>
      <View style={styles.containerRodape}>
        <Idiomas/>
        <Habilidades/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    padding: 5,
  },
  containerRodape:{
    flexDirection: 'row',
    marginBottom: 10,
  },
});
