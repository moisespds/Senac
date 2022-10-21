import React, {createContext} from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Inputs from '../components/Inputs';
import Resultado from '../components/Resultado';
import { NotaContext } from '../context/Notas';

export default function PagesNotas(props) {

  const {boletim} = React.useContext(NotaContext)

  return (
    <View style={styles.container}>
        <View>
            <Header onBoletim={boletim}/>
            <Resultado />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 5,
    flexWrap: 'wrap',
  },

    inputNotas:{
        width: '25%',
        borderWidth: 1,
        padding: 5,
        marginRight: 5,
    },
    inputNome:{
        borderWidth: 1,
        padding: 5,
        marginBottom: 15
    },
})

