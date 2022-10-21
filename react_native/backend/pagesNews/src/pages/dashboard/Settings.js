import React, { useContext } from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/Auth";
import Buttons from "../../components/Button";
import NewsImage from "../../components/NewsImage"

export default function Settings(props){

    const {user, logout} = React.useContext(AuthContext)
    const navigation = useNavigation()

    return(
            <View style={styles.container}>
                <View style={{alignItems: 'center'}}>
                        <NewsImage style={styles.img} image={require("../../../assets/perfil.png")}/>
                    <View>
                        <Text style={styles.title}>Ola {user.name}!</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>{user.email}</Text>
                    </View>
                </View>
                <View>
                    <Buttons styleButton={styles.button} onPress={() => logout()} styleTxt={styles.txtButton} buttonName='Sair' />
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
        backgroundColor: '#ff0000',
    },
    txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
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