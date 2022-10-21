import React from "react";
import { useState } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Buttons(props){

    return(
            <View>
                <TouchableOpacity style={props.style} onPress={props.onPress}><Text style={props.styleTxt}>{props.buttonName}</Text></TouchableOpacity>
            </View>
    )
}

const styles = StyleSheet.create({

})