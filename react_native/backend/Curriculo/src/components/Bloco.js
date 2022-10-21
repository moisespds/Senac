import React from "react";
import { View, StyleSheet, Image } from "react-native";

import TextInfo from "./TextInfo";
import TextSubTitulo from "./TextSubTitulo";
import TextTitulo from "./TextTitulo";

export default function Bloco(props) {
    const infoDirection = props.infoDirection || "column";

    console.log(infoDirection);
  return (
    <View style={styles.container}>
    <View style={styles.containerHeader}>
      {props.imagem && (
        <View style={styles.imageRedim}>
          <Image style={styles.imageHeader} source={props.imagem} />
        </View>
      )}
      <View style={styles.textRedim}>
      {props.nome && (
        <TextTitulo nome={props.nome} />
        )}
        {props.titulo && (
        <TextTitulo titulo={props.titulo} />
        )}
        {props.subTitulo && (
          <TextSubTitulo subTitulo={props.subTitulo} />
        )}
        {props.infos.map((info) => (
          <TextInfo titulo={info.titulo} texto={info.texto} direction={infoDirection} />
        ))}
      </View>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: "row",
    //marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
  container: {
    flex: 1,
   // margin: 2,
    padding: 5,
  },
  containerRodape:{
    flexDirection: 'row',
   // marginBottom: 10,
  },
  imageRedim: {
    width: "23.5%",
  },
  textRedim: {
    width: "70.5%",
    marginLeft: 25,
  },
  imageHeader: {
    height: 120,
    width: 110,
    resizeMode: "stretch",
    borderRadius: 50,
  },
  containerInfo: {
  //  marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#000000",
  },
  containerExperiencias:{
   // marginBottom: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: '#000000',
},
});
