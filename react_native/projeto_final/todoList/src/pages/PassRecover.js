import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/Auth";
import Inputs from "../components/Inputs";
import Buttons from "../components/Button";

export default function PassRecover(props){

    const {user, logout} = React.useContext(AuthContext)
    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Digite o E-mail de Recuperação:</Text>
                </View>
                <View>
                    <Inputs style={styles.inputs} placeholder='Digite o E-mail:' />
                </View>
                <View>
                    <Buttons style={styles.button} styleTxt={styles.txtButton} buttonName='Enviar' />
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
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15,
    },
    button:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        marginLeft: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
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
        marginLeft: 15,
        padding: 10,
        backgroundColor: '#CACACA'
    }
})