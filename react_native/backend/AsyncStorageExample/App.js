import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [valor, setValor] = React.useState([]);
  const [valorDigitado, setValorDigitado] = React.useState();

  const gravar = async () => {
    try {
      let arr = [...valor, valorDigitado];
      const jsonValor = JSON.stringify(arr);
      await AsyncStorage.setItem("lista", jsonValor);
      setValorDigitado("");
      setValor(arr);
    } catch (err) {
      console.log(err);
    }
  };

  const consultar = async () => {
    try {
      const jsonValor = await AsyncStorage.getItem("lista");
      setValor(jsonValor != null ? JSON.parse(jsonValor) : []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    consultar();
  }, []);

  const remove = async () =>{
    try{
       await AsyncStorage.removeItem('lista')
      setValor([])
    }catch(err) {
      console.log(err)
    }
    console.log('Apagado')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Armazenando dados no Aparelho</Text>
      <View style={styles.box}>
        <Text>Valor armazenado:</Text>
        <View style={{ flexDirection: "row" }}>
        <Text style={styles.highlight}> - </Text>
          {valor.map((v) => (
            <>
            <Text style={styles.highlight}>{v}</Text>
            <Text style={styles.highlight}> - </Text>
            </>
           ))}
        </View>
      </View>
      <View style={styles.box}>
        <TextInput
          placeholder="Informe o valor:"
          style={styles.input}
          onChangeText={setValorDigitado}
          value={valorDigitado}
        />
        <TouchableOpacity onPress={gravar}>
          <Text style={styles.btn}>Gravar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={remove}>
          <Text style={styles.btn2}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    justifyContent: "center",
    padding: 20,
  },
  btn: {
    fontSize: 15,
    padding: 10,
    backgroundColor: "blue",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  btn2: {
    fontSize: 15,
    padding: 10,
    backgroundColor: "red",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  box: {
    marginBottom: 20,
    marginTop: 20,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    fontSize: 30,
  },
  highlight: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
