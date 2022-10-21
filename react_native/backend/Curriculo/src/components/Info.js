import React from "react";
import { SafeAreaView, View, Text, StyleSheet,Image } from "react-native";

import  TextTitulo from "./TextTitulo"
import TextInfo from "./TextInfo"

export default function Info(props){
    return(
            <View>
                <TextTitulo titulo={props.titulo} />
                {props.infos.map((info) => <TextInfo titulo={info.titulo} info={info.info} /> )}
            </View>
    )
}

const styles = StyleSheet.create({
    containerInfo:{
        marginBottom: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000000',
      },
})