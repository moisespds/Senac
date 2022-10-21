import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, Button} from "react-native";
import { useNavigation } from "@react-navigation/native";

import NewsTitle from "../../components/NewsTitle";
import NewsImage from "../../components/NewsImage";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Button";

export default function SignIn(){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View style={styles.containerHeader}>
                    <NewsImage image={require("../../../assets/android1.png")} />
                </View>
                <View style={styles.containerInputs}>
                    <Inputs placeholder='Nome:' />
                    <Inputs placeholder='E-mail' />
                    <Inputs placeholder='Senha:' />
                    <Inputs placeholder='Confirme a Senha:' />
                </View>
                <View style={styles.containerButton}>
                    <View style={{width: '50%', height: '100%'}}>
                        <Buttons styleButton={styles.buttonEnviar} styleTxt={styles.txtButton} onPress={() => navigation.navigate('LogIn')}  buttonName='Enviar'/>
                    </View>
                    <View style={{width: '50%', height: '100%'}}>
                        <Buttons styleButton={styles.buttonVoltar} styleTxt={styles.txtButtonV} onPress={() => navigation.goBack()}  buttonName='Voltar'/>
                    </View>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 2,
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
        flex: 1,
        width: '95%',
         height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
    },
    buttonVoltar:{
        flex: 1,
        width: '95%',
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CACACA',
    },
    txtButtonV:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})