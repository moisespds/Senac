import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Dashboard(){

    const navigation = useNavigation()

    return(
        <SafeAreaView>
            <StatusBar backgroundColor={'#00ff00'} barStyle='light-content' translucent={false} />
            <View>
                <Text style={styles.title} >Entre!!!</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}><Text style={styles.txtButton}>Cadastre-se</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Options')}><Text style={styles.txtButton} >Controle suas Finaças</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
button:{
    width: 200,
    height: 40,
    backgroundColor: '#00ff00',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
},
txtButton:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff'
},
title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 25
}
})