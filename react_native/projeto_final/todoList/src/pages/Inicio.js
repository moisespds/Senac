import React from "react";
import { View, Text, Image, SafeAreaView,StyleSheet,StatusBar,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native"

import ImageA from "../components/Image";

import Buttons from "../components/Button";
 



export default function Inicio() {
const navigation=useNavigation()
   
return (
  <SafeAreaView style={styles.container}>

    <View style={styles.containerHeader}>
    <ImageA style={styles.Image} image={require("../../assets/TCC.jpg")} />
    </View>
   <View style={styles.listaInicio}>
    <Text style={styles.inicio1}>Planeja o dia </Text>
     <Text style={styles.inicio}>Tema: Calendário das Atividades</Text>
     <Text style={styles.inicio}>Instituição: SNAC </Text>
     <Text style={styles.inicio}>País: Brasil Cidade:Bauru S/P</Text>
     <Text  style={styles.inicio}>Rua: Engenheiro Saint Martin, 10-12, Centro,CP:17010-150</Text>
     <Text style={styles.inicio}>Telefone: (14)3321-3199 ou (14) 996767848</Text>
     <Text style={styles.inicio}>E-mail: bauru@sp.senac.br  </Text>
     </View> 
     <View style={styles.containerButton}>
        <Buttons style={styles.botao} styleTxt={styles.botaoTxt} buttonName='Mudar Tela' onPress={() => navigation.navigate("LogIn")}/>
     </View>
     </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#EBC12C",
    },
    Image:{ 
      width:"100%",
      height:300,
      resizeMode:"strech",
      borderBottomRightRadius: 100,
    },
    inicio1:{
       textAlign:"center",
        marginTop:30,
        color: '#722233',
        fontWeight: 'bold',
        fontSize:20,
        marginBottom:10,
    },
    inicio:{
        fontSize:20,
        margin:10,
        color: '#080702',
        fontWeight: 'bold',
    },
    botao:{
        width: '92%',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#35B9FF',
        marginLeft: 15,
    },
    botaoTxt:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    }
    
});