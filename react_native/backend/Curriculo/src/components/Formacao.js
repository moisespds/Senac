import React from "react";
import { StyleSheet, View, } from "react-native"

import TextInfo from ".//TextInfo";
import TextTitulo from ".//TextTitulo";

export default function Formacao(){
    return(
        <View style={styles.containerFormacao}>
            <TextTitulo titulo='Formação:' />
            <TextInfo info='• Curso Cod3r br na plataforma udemy: Logica de programação trabalhando com variaveis, constantes, condicionais e loops com programação funcional em javascript tambem usando python'/>
            <TextInfo info='• Curo de WEB moderno Cod3r br na plataforma udemy: Usando HTML, CSS e JavaScript com criacões WEB, experiências com frameworks React e Vue'/>
            <TextInfo info='• Cursando no Senac Bauru: uso de React Native para criação e estilização de aplicações mobile'/>
            <TextInfo info='• Ensino medio completo '/>
        </View>
    )
}

const styles = StyleSheet.create({
containerFormacao:{
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
},
})