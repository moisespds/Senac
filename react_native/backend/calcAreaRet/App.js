import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,} from 'react-native';

export default function App() {
  const [base, setBase] = React.useState(0);
  const [altura, setAltura] = React.useState(0);
  const [result, setResult] = React.useState(0)
  const Calcular = () => {
    const res = base * altura
    setResult(res)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área Retangulo</Text>
    <View style={styles.base}>
      <Text  style={styles.txt}>Base:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBase}
        value={base}
        placeholder="Digite um valor"
        keyboardType="numeric"
      />
    </View>  
      <View style={styles.alt}>
        <Text style={styles.txt}>Altura:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAltura}
          value={altura}
          placeholder="Digite um Valor"
          keyboardType="numeric"
        />
      </View>
      <View>
        <Button
          style={styles.button}
          title="Calcular"
          onPress={() => Calcular()}
        />
      </View>
      <View style={styles.result}>
        <Text style={styles.title}>Resultado:</Text>
        <Text style={styles.title}>{result}</Text>
      </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#625D5C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    padding: 10,
  },
  button: {
    width: 55,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#18ADEE',
    margin: 30
  },
  txt: {
    fontSize: 25,
    padding: 10,
    color: '#18ADEE'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 30,
    color: '#18ADEE'

  },
  base: {
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    marginLeft:5
  },
  alt: {
    paddingBottom: 10,
    paddingTop: 10,
    marginTop: 10,
    marginLeft:5
  },
  result: {
    padding: 15,
    margin: 10,

  }

});
