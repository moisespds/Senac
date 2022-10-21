import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, TextInput, TouchableOpacity, Text, } from "react-native";
import TextTitulo from "./TextTitulo";

export default function HeaderMmc(props){
    const [ n1, setN1 ] = React.useState()
    const [ n2, setN2 ] = React.useState()

    return(
        <View style={styles.container}>
            <View>
                <TextTitulo titulo='MMC:'/>
            </View>
            <View style={styles.containerTextInput}>
                <TextInput style={styles.textInput} placeholder="Digite um Numero" onChangeText={setN1} value={n1}/>
                <TextInput style={styles.textInput} placeholder="Digite um Numero" onChangeText={setN2} value={n2}/>
            </View>
                <TouchableOpacity onPress={() => props.onFator([n1, n2])} style={styles.button}><Text style={styles.textButton}>Mostrar</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 5,
    },  
    containerTextInput:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 20,
    },
    button:{
        width: '100%',
        height:40,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput:{
        width: '50%',
        height: 40,
        margin: 5,
        borderWidth: 1,
    },
    textButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff'
    }
})