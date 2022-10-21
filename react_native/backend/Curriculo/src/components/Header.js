import React from "react";
import {View, StyleSheet, Image } from "react-native";

import TextTitulo from "./TextTitulo";
import TextSubTitulo from "./TextSubTitulo";
import TextInfo from "./TextInfo";


export default function Header(){
    return(
            <View style={styles.containerHeader}>
                <View style={styles.imageRedim} >
                    <Image style={styles.imageHeader} source={require('../../assets/perfil.png')}/>
                </View>
                <View style={styles.textRedim}>
                    <TextTitulo titulo='Moises Prado da Silva'/>
                    <TextSubTitulo subTitulo='Buscando a primeira Vaga na area'/>
                    <TextInfo info='Aprendendo a programar com foco no backside na area de Ciências de dados, Machine learning e IA, em aplicaçõe mobile, WEB e Server side e inovações tecnologicas de nicho.'/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection: 'row',
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000000',
      }, 
      imageRedim:{
        width: '23.5%',
      },
      textRedim:{
        width: '70.5%',
        marginLeft: 25,
      },
      imageHeader:{
        height: 120,
        width: 110,
        resizeMode: 'stretch',
        borderRadius: 50,
      },
})