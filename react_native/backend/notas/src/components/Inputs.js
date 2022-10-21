import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput } from 'react-native';

export default function Inputs(props) {
  return (
    <View>
        <TextInput style={props.estilo} placeholder={props.placeHolder} onChangeText={() => props.setValue()} value={() => props.Value()} />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
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
