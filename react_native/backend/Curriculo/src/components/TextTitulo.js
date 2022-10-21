import React from "react";
import { SafeAreaView, View, Text, StyleSheet,Image, ProgressViewIOSComponent } from "react-native";

export default function TextTitulo(props){
 return(
    <View>
        <Text style={styles.textTitulo}>{props.titulo}:</Text>
        <Text style={styles.textTitulo}>{props.nome}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    textTitulo:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#0000ff',
        paddingBottom: 10,
      },
})