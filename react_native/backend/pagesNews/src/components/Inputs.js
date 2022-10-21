import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Inputs(props){

    const navigation = useNavigation()

    return(
            <View>
                <TextInput style={styles.input} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value}/>
            </View>
    )
}

const styles = StyleSheet.create({
    input:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#CACACA'
    }
})