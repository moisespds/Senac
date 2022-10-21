import React from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Cadastro from "../cadastro";

export default function Dashboard(){

    const navigation = useNavigation()

    return(
        <SafeAreaView>
            <View>
                <Text>Tela de Dashboard</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}><Text>Mudar de Tela</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})