import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Title from './Title';

export default function Header(props) {
    const [ nome, setNome ] = React.useState()
    const [ n1, setN1 ] = React.useState()
    const [ n2, setN2 ] = React.useState()
    const [ n3, setN3 ] = React.useState()
    const [ n4, setN4 ] = React.useState()

  return (
    <View style={styles.container}>
        <View>
            <Title title="Boletim:"/>
        </View>
        <View style={styles.conatainerIputs}>
            <TextInput style={styles.inputNome} placeholder='Aluno' onChangeText={setNome} value={nome}/>
            <View style={styles.conatainerInputsNotas}>
               <TextInput style={styles.inputNotas} placeholder='1° Bimestre' onChangeText={setN1} value={n1} />
               <TextInput style={styles.inputNotas} placeholder='2° Bimestre' onChangeText={setN2} value={n2} />
               <TextInput style={styles.inputNotas} placeholder='3° Bimestre' onChangeText={setN3} value={n3} />
               <TextInput style={styles.inputNotas} placeholder='4° Bimestre' onChangeText={setN4} value={n4} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => props.onBoletim(nome, n1, n2, n3, n4)}><Text style={styles.txtButton}>Adicionar</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
    },
    conatainerIputs:{
        flexDirection: 'column',
        marginTop: 20
    },
    conatainerInputsNotas:{
        flexDirection: 'row',
        padding: 5,
    },
    inputNome:{
        borderWidth: 1,
        padding: 5,
        marginBottom: 15
    },
    inputNotas:{
        width: '25%',
        borderWidth: 1,
        padding: 5,
        marginRight: 5,
    },
    button:{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
    }
})