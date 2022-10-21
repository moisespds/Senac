import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TextInput, TouchableOpacity} from "react-native";



export default function Cadastro(){
    return(
             <View  style={styles.container}>
             <View style={styles.containerHeader}>
                <Text  style={styles.title}>Cadastre-se</Text>
             </View>
             <View style={styles.containerInputs}>
                <TextInput style={styles.inputs} placeholder="Name"/>
                <TextInput style={styles.inputs} placeholder="E-mail"/>
                <TextInput style={styles.inputs} placeholder="Password"/>
                <TextInput style={styles.inputs} placeholder="Confirm Password"/>
                <TouchableOpacity style={styles.button}><Text  style={styles.txt}>Cadastrar</Text></TouchableOpacity>
             </View>
            </View>

    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    margin: 5,
},
containerHeader:{
    alignItems: 'center',
},
containerInputs:{
    justifyContent: 'center',
    alignItems: 'center',
},
button:{
    width: 300,
    height: 40,
    backgroundColor: "#00ff00",
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 20,
},
inputs:{
    width: 300,
    height: 40,
    borderWidth: 1,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
},
txt:{
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20
},
title:{
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
}
})