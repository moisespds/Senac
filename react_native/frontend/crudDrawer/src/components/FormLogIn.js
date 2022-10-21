import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from './Buttons';
import Images from './Images';
import Inputs from './Inputs';


export default function FormLogIn(props) {

  const navigation = useNavigation()

  return (
    <View>
      <View style={styles.containerImg}>
        <Images style={styles.img} image={require('../../assets/logo.png')} />
      </View>
      <View style={styles.containerInputs}>
        <Inputs placeholder='E-mail:' style={styles.inputs} onChangeText={props.onChangeTextEmail} value={props.valueEmail} />
        <Inputs placeholder='Password:' style={styles.inputs} onChangeText={props.onChangeTextPassword} value={props.valuePassword} />
      </View>
      <View style={styles.buttonContainer}>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={() => navigation.navigate('DrawerRoutes')} ButtonName='Entrar'/>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={() => navigation.navigate('SignIn')} ButtonName='Cadastre-se'/>
      </View>
    </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4FBDF6',
    justifyContent: 'center',
  },
  containerInputs:{
  },
  containerImg:{
    flex: 2,
    justifyContent: 'center',
    marginBottom: 80,
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 10,
  },
  button:{
    width: '95%',
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#008516',
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
