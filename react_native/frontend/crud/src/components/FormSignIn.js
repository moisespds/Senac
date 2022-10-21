import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from './Buttons';
import Images from './Images';
import Inputs from './Inputs';


export default function FormSignIn(props) {

  const navigation = useNavigation()

  return (
    <View style={{width: '100%'}}>
      <View style={styles.container}>
        <View style={styles.containerImg}>
            <Images style={styles.img} image={require('../../assets/logo.png')} />
        </View>
        <View style={styles.containerInputs}>
            <Inputs style={styles.inputs} placeholder='Nome:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='E-mail:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='Senha:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='Confirme a Senha:' onChangeText={props.onChangeText} value={props.value} />
        </View>
      </View>
      <View style={styles.containerButton}>
        <Button style={styles.buttonV} styleTxt={styles.txtButtonV} onPress={() => navigation.navigate('TabRoutes')} ButtonName='Enviar'/>
        <Button style={styles.buttonP} styleTxt={styles.txtButtonP} onPress={() => navigation.goBack()} ButtonName='Voltar'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2
  },
  containerImg:{
    flex: 2,
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 50,
  },
  containerInputs:{
    flex: 4,
    justifyContent: 'center',
    marginBottom: 10,
  },    
  containerButton:{
    flexDirection: 'row',
    marginLeft: 10
  },
  buttonV:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008516',
  },
  txtButtonV:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  buttonP:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',

  },
  txtButtonP:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  inputs:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    color: '#fff'
  },
  img:{
    width: '100%',
    height: 250,
    resizeMode: 'stretch'
  }
});
