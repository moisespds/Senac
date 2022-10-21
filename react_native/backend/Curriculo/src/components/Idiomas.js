import React from "react";
import { StyleSheet, View, } from "react-native"

import TextInfo from ".//TextInfo";
import TextTitulo from ".//TextTitulo";

export default function Idiomas(){
    return(
        <View style={styles.containerIdiomas}>
            <TextTitulo titulo='Idiomas:' />
            <TextInfo info='• Inglês Basico(Aproximadamente Nivel B2)'/>
        </View>
    )
}

const styles = StyleSheet.create({
    containerIdiomas:{
        width: '33.5%',
        borderWidth: 1,
        padding: 5,
      },
})