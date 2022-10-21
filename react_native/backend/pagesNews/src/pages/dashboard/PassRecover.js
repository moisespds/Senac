import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/Auth";
import Inputs from "../../components/Inputs";
import Buttons from "../../components/Button";

export default function PassRecover(props){

    const {user, logout} = React.useContext(AuthContext)
    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Digite o E-mail de Recuperação:</Text>
                </View>
                <View>
                    <Inputs placeholder='Digite o E-mail:' />
                </View>
                <View>
                    <Buttons styleButton={styles.button} styleTxt={styles.txtButton} buttonName='Enviar' />
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',  
        margin: 2,
        marginLeft: 15, 
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00ff00',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
    }
})