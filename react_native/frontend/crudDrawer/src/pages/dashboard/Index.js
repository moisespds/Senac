import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Entypo'

import Images from '../../components/Images';
import Inputs from '../../components/Inputs';
import Button from '../../components/Buttons';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View>
        <Images style={styles.img} image={require("../../../assets/logo.png")} />
      </View>
        <View>
          <Text style={styles.txtTitle}>Slack Tickets</Text>
          <Text style={styles.txt}>Os melhores Eventos e Shows voce encotra aqui</Text>
          <View style={styles.containerPesquisa}>
              <Inputs style={styles.inputs} placeholder="Pesquise Aqui:" />
              <View>
                <TouchableOpacity style={styles.buttonV}><Icon name='magnifying-glass' color={'#000'} size={25}/></TouchableOpacity>
              </View>
          </View>
        </View>
      <View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#73F2FF',
  },
  containerPesquisa:{
    width: '100%',
    flex: 2,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  txtTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 15,
    marginBottom: 15,
  },
  txt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 15,
    marginBottom: 15,
  },
  img:{
    width: '100%',
    height: 80,
    resizeMode: 'stretch'
  },
  inputs:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    color: '#fff'
  },
  buttonV:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6878E8',
  },
  txtButtonV:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
});
