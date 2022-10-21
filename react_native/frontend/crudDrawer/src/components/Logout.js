import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

import Button from './Buttons';

export default function Logout({ navigation }) {
  return (
    <View>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={()=> navigation.navigate('LogIn')} ButtonName="Sair"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 2
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
});
