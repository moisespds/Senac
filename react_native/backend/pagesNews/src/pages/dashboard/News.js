import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function News(){

    const navigation = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.corpo}>
                <Text style={styles.title}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
                <Image style={styles.img} source={require ("../../../assets/android1.png")} />
                <Text style={styles.txt}> O Apple Pay ainda não está totalmente consolidado no mercado: só funciona nos Estados Unidos e em estabelecimentos parceiros com equipamento de leitura NFC.{'\n'}  E, de acordo com um relato do China Business Week, ele logo deve ganhar um concorrente de peso para piorar a situação. Isso porque a Google estaria preparando um sistema de pagamentos via celular muito parecido que, ao menos provisoriamente, levaria o nome de Android Pay.{'\n'}  
                   O Android Pay estaria em desenvolvimento na China, em uma parceria com a China UnionPay, maior operadora de cartões de crédito e débito do país — segunda do mundo, atrás somente da Visa.{'\n'}  Essa aliança traz o benefício de um maior número de estabelecimentos envolvidos, dando uma vantagem inicial ao serviço em relação aos concorrentes.{'\n'}
                  Ainda segundo o site, o sistema seria o mesmo: bastaria aproximar o smartphone do terminal de pagamento para processar a compra, com base na tecnologia sem fio Near</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
      },
    title: {
        fontSize: 30,
      },
      img:{
        width: 300,
        height: 200,
        resizeMode: 'stretch',
        marginBottom: 40,
        marginTop: 20,
      },
      txt: {
        fontSize: 16,
        paddingBottom: 10,
      },
      corpo:{
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      header: {
        backgroundColor: '#CACACA',
        width: '100%',
        height: 70,
        marginBottom: 10,
        justifyContent: 'top',
        alignItems: 'flex-start'
      },
})