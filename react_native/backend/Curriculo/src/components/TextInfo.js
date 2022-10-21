import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ProgressViewIOSComponent,
} from "react-native";

export default function TextInfo(props) {
  const direction = props.direction || "column";

  return (
    <View style={{ flexDirection: direction }}>
      <Text style={styles.TextInfo}>{props.texto} </Text>
      <Text style={styles.TextSubTitulo}>{props.titulo} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  TextInfo: {
    fontWeight: "bold",
    flexDirection: "row",
  },
  TextSubTitulo: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textTitulo:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0000ff',
    paddingBottom: 10,
  },
});
