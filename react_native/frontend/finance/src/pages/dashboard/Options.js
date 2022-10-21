import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Options(){

    const navigation = useNavigation()

    const [valor, setValor ] = React.useState()
    const [verR, setVerR ] = React.useState([])
    const [verD, setVerD ] = React.useState([])

    let valores = valor + " - "
    const mostrarD = () => {
        let guard = []
            guard.push(valores)
        setVerD(guard => [...guard, valores])
    }       
    const mostrarR = () => {
        let guard = []
            guard.push(valores)
        setVerR(guard => [...guard, valores])
    }
    return(
            <View style={styles.container}>
                <View style={styles.containerTitulo}>
                    <Text style={styles.title}>Controle Suas Finaças!!!</Text>
                </View>
                <TextInput style={styles.inputs} placeholder="Digite o Valor" onChangeText={setValor} value={valor} />
                <View style={styles.containerButtons}>    
                    <TouchableOpacity style={styles.buttonsD} onPress={mostrarD}><Text style={styles.txtButton}>Despesas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttonsR} onPress={mostrarR}><Text style={styles.txtButton}>Receita</Text></TouchableOpacity>
                </View>
                <View style={styles.containerLista}>
                    <View style={styles.containerDes}>
                         <Text style={styles.title}>{verD}</Text>
                    </View>
                    <View style={styles.containerRec}>
                         <Text style={styles.title}>{verR}</Text>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex: 1,
    flexDirection: 'column',
    margin: 5,
},
containerTitulo:{
    alignItems: 'center',
},
containerButtons:{
    flexDirection: 'row'
},
containerLista:{
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5
},
containerRec:{
    width: '50%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 15,
},
containerDes:{
    width: '50%',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 15,
},
inputs:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
},
buttonsD:{
    width: '50%',
    height: 40,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
},
buttonsR:{
    width: '50%',
    height: 40,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
},
title:{
    fontSize: 25,
    fontWeight: 'bold',
},
txtButton:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
}
})