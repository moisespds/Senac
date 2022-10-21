import React, { useState, useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ImageA from "../components/Image";
import Inputs from "../components/Inputs";
import Buttons from "../components/Button";
import { AuthContext } from "../../context/Auth";

export default function LogIn(){

    const navigation = useNavigation()

    const [ email, setEmail ] = React.useState()
    const [ password, setPassword ] = React.useState()

    const { login } = React.useContext(AuthContext);

    const buttonLogin = () => {
        try {
            login("a@a.com", 123);
            navigation.navigate("DrawerRoutes");
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <ImageA style={styles.Image} image={require("../../assets/TCC.jpg")} />
                </View>
                <View style={styles.containerInputs}>
                    <Inputs style={styles.inputs} placeholder='E-mail' onChangeText={setEmail} value={email} />
                    <Inputs style={styles.inputs} placeholder='Senha' onChangeText={setPassword} value={password} />
                </View>
                <View style={styles.containerButton}>
                    <Buttons style={styles.buttonGrande} styleTxt={styles.txtButton} onPress={() => {
                        buttonLogin()
                        }} buttonName='Entrar'/>
                    <Buttons style={styles.buttonMenor} styleTxt={styles.txtButton} onPress={() => navigation.navigate('SignIn')} buttonName='Cadastre-se'/>
                    <Buttons style={styles.buttonMenorC} styleTxt={styles.txtButtonE} onPress={() => navigation.navigate('PassRecover')} buttonName='Esqueci minha senha'/>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EBC12C',
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
        borderRadius: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
    },
    buttonMenor:{
        width: '92%',
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
    },
    buttonMenorC:{
        width: '92%',
        height: 30,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    txtButtonE:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    inputs:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#CACACA'
    },
    Image:{
            width: 250,
            height: 250,
            borderRadius: 250 / 2
    
        },
})