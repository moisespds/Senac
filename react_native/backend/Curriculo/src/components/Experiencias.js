import React from "react"
import { StyleSheet, View, Text} from "react-native"
import TextInfo from "./TextInfo"
import TextTitulo from "./TextTitulo"

export default function Experiencias(){
    return(
        <View style={styles.containerExperiencias}>
            <TextTitulo titulo='Experiencias:' />

            <TextInfo info='• Logica de programação trabalhando com variaveis, constantes, condicionais e loops com programação funcional em javascript'/>
            <TextInfo info='• Uso de HTML e CSS com criacões WEB, usando frameworks React e Vue para algumas aplicações WEB de minha autoria'/>
            <TextInfo info='• Experiência na criação de uma aplicação WEB completa como projeto na entrega final do meu curso, onde trabalhei com HTML CSS JavaScript utilizando o framework Vue para a criaçao de um blog de avaliações de cursos online. Utilizando Vue para a criação de componentes 
            da aplicação e estilização, e criando componentes focado no backend nodeJS para conexão com o banco de dados em uma aplicação onde eram nessessario trablhar com bancos relacionais(postgresSQL) e bancos nao relacionais(MongoDB) para a criação e edição de usuarios, posts e avaliações.'/>
        </View>
    )

}

const styles = StyleSheet.create({
 containerExperiencias:{
    marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
},
})

