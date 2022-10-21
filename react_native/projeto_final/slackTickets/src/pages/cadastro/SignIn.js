import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ButtonRow from '../../components/ButtonsRows';
import Images from '../../components/Images';
import Inputs from '../../components/Inputs';


export default function FormSignIn(props) {

  const navigation = useNavigation()

  return (
      <View style={styles.container}>
        <View style={styles.containerImg}>
            <Images style={styles.img} image={require('../../../assets/logo.png')} />
        </View>
        <View style={styles.containerInputs}>
            <Inputs style={styles.inputs} placeholder='Nome:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='E-mail:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='Senha:' onChangeText={props.onChangeText} value={props.value} />
            <Inputs style={styles.inputs} placeholder='Confirme a Senha:' onChangeText={props.onChangeText} value={props.value} />
        </View>
      <View style={styles.containerButton}>
        <ButtonRow style={styles.buttonV} styleTxt={styles.txtButtonV} onPress={() => navigation.navigate('LogIn')} ButtonName='Enviar'/>
        <ButtonRow style={styles.buttonP} styleTxt={styles.txtButtonP} onPress={() => navigation.goBack()} ButtonName='Voltar'/>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg:{
    width: '100%',
    height: 250,
    justifyContent: 'center',
    marginBottom: 80,
  },
  containerInputs:{
    justifyContent: 'center',
    marginBottom: 10,
  },    
  containerButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 10
  },
  buttonV:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01A8FA',
    borderRadius: 10,
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
    borderRadius: 10,

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
    borderRadius: 10,
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
    resizeMode: 'stretch',
    borderBottomWidth: 3,
    borderBottomLeftRadius: 100,
  }
});
