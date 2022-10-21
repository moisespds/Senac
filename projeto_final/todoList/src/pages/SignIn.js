import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ImageA from "../components/Image";
import Inputs from "../components/Inputs";
import Buttons from "../components/Button";

export default function SignIn(){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <ImageA style={styles.Image} image={require("../../assets/TCC.jpg")} />
                </View>
                <View style={styles.containerInputs}>
                    <Inputs style={styles.inputs} placeholder='Nome:' />
                    <Inputs style={styles.inputs} placeholder='E-mail' />
                    <Inputs style={styles.inputs} placeholder='Senha:' />
                    <Inputs style={styles.inputs} placeholder='Confirme a Senha:' />
                </View>
                <View style={styles.containerButton}>
                    <View style={{width: '50%', height: '100%'}}>
                        <Buttons style={styles.buttonEnviar} styleTxt={styles.txtButton} onPress={() => navigation.navigate('LogIn')}  buttonName='Enviar'/>
                    </View>
                    <View style={{width: '50%', height: '100%'}}>
                        <Buttons style={styles.buttonVoltar} styleTxt={styles.txtButtonV} onPress={() => navigation.goBack()}  buttonName='Voltar'/>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#EBC12C',
    },
    containerHeader:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80,
    },
    containerInputs:{
        marginTop: 105,
        marginLeft: 15,
    },
    containerButton:{
        flex: 2,
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 10,
        justifyContent: 'space-around',
    },
    buttonEnviar:{
        width: '95%',
         height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
    },
    buttonVoltar:{
        width: '95%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    txtButtonV:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
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