import React from "react";
import { StyleSheet, View, } from "react-native"

import TextInfo from ".//TextInfo";
import TextTitulo from ".//TextTitulo";

export default function Habilidades(){
    return(
        <View style={styles.containerHabilidades}>
            <TextTitulo titulo='Habilidades:' />
            <TextInfo info=' • Facilidades em resolver problemas'/>
            <TextInfo info='• Facilidades em resolver problemas'/>
            <TextInfo info='• Aprendo rapido'/>
            <TextInfo info='• Versátil'/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerHabilidades:{
        width: '60.5%',
        marginLeft: 15,
        borderWidth: 1,
        padding: 5,
      },
})