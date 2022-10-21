import React from "react";
import { SafeAreaView, View, Text, StyleSheet,Image, ProgressViewIOSComponent } from "react-native";

export default function TextSubTitulo(props){
 return(
    <Text style={styles.TextSubTitulo}>{props.subTitulo}</Text>
    )
}

const styles = StyleSheet.create({
    TextSubTitulo:{
        fontSize: 18,
        fontWeight: 'bold',
      },
})