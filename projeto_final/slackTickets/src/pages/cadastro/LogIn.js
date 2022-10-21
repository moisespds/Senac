import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Buttons';
import Images from '../../components/Images';
import Inputs from '../../components/Inputs';


export default function FormLogIn(props) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Images style={styles.img} image={require('../../../assets/logo.png')} />
      </View>
      <View style={styles.containerInputs}>
        <Inputs placeholder="E-mail:" style={styles.inputs} onChangeText={props.onChangeTextEmail} value={props.valueEmail} />
        <Inputs placeholder="Password:" style={styles.inputs} onChangeText={props.onChangeTextPassword} value={props.valuePassword} />
      </View>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={() => navigation.navigate('DrawerNav')} ButtonName='Entrar'/>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={() => navigation.navigate('SignIn')} ButtonName='Cadastre-se'/>
    </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInputs:{
  },
  containerImg:{
    width: '100%',
    height: 250,
    justifyContent: 'center',
    marginBottom: 80,
  },
  button:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#01A8FA',
    borderRadius: 10,
    marginLeft: 10,
  },
  txtButton:{
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
