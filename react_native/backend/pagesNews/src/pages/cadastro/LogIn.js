import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsTitle from "../../components/NewsTitle";
import NewsImage from "../../components/NewsImage";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Button";
import { AuthContext } from "../../contexts/Auth";

export default function LogIn(){

    const navigation = useNavigation()

    const [ email, setEmail ] = React.useState()
    const [ password, setPassword ] = React.useState()

    const { login } = React.useContext(AuthContext);

    const buttonLogin = () => {
        try {
            login(email, password);
            navigation.navigate("TabNews");
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <NewsImage image={require("../../../assets/android1.png")} />
                </View>
                <View style={styles.containerInputs}>
                    <Inputs placeholder='E-mail' onChangeText={setEmail} value={email} />
                    <Inputs placeholder='Senha' onChangeText={setPassword} value={password} textType='password' />
                </View>
                <View style={styles.containerButton}>
                    <Buttons styleButton={styles.buttonGrande} styleTxt={styles.txtButton} onPress={() => {
                        buttonLogin()
                        }} buttonName='Entrar'/>
                    <Buttons styleButton={styles.buttonMenor} styleTxt={styles.txtButton} onPress={() => navigation.navigate('SignIn')} buttonName='Cadastre-se'/>
                    <Buttons styleButton={styles.buttonMenorC} styleTxt={styles.txtButton} onPress={() => navigation.navigate('PassRecover')} buttonName='Esqueci minha senha'/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        margin: 5,
    },
    containerHeader:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInputs:{
        marginTop: 105,
        marginLeft: 15,
    },
    containerButton:{
        marginLeft: 15,
    },
    buttonGrande:{
        width: '92%',
        height: 40,
        borderWidth: 1,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
    },
    buttonMenor:{
        width: '92%',
        height: 30,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
    },
    buttonMenorC:{
        width: '92%',
        height: 30,
        borderWidth: 1,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CACACA',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})