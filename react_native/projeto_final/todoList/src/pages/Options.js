import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/Auth";
import Buttons from "../components/Button";
import ImageA from "../components/Image"

export default function Option(props){

    const {user, logout } = React.useContext(AuthContext)
    const navigation = useNavigation()

    const buttonLogout = () => {
        try {
            logout();
            navigation.navigate("LogIn");
        } catch (error) {
            console.log(error.message);
        }
    }

    return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                        <ImageA style={styles.img} image={require("../../assets/perfil.png")}/>
                    <View>
                        <Text style={styles.title}>Ola {user.name}!</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{user.email}</Text>
                    </View>
                </View>
                <View>
                    <Buttons style={styles.button} onPress={() => buttonLogout()} styleTxt={styles.txtButton} buttonName='Sair' />
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
    },
    button:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    img:{
        width: 500,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 40,
        marginTop: 20,
        borderRadius: 100
      },
})