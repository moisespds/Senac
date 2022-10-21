import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, } from 'react-native';
import HeaderMmc from '../components/HeaderMmc';
import ResultadoMmc from '../components/ResultadoMmc';

export default function MmcPage() {
    const [ resultado, setResultado ] = React.useState()
    const [divisiveis, setDivisiveis] = React.useState([])

    let  numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    
    const fator = (n1, n2,) => {
      let primosI = [0]
      while(!(n1, n2 % numerosPrimos[primosI] == 0))
      if(n1, n2 / primosI ){

      }
    }
    React.useEffect(() => {
  
    }, [])

  return (
    <View>
        <HeaderMmc onFator={([n1, n2]) => fator([n1, n2])}/>
        <ResultadoMmc resultado={() => fator(0)} />
    </View>
  );
}

const styles = StyleSheet.create({

})
