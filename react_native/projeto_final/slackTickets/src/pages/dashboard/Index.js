import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/Entypo'

import Images from '../../components/Images';
import Inputs from '../../components/Inputs';
import Button from '../../components/Buttons';
import ItemTickets from '../../components/ItemTickets';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <View>
        <Images style={styles.img} image={require("../../../assets/logo.png")} />
      </View>
        <View>
          <Text style={styles.txt}>Os melhores Eventos e Shows voce encotra aqui</Text>
          <View style={styles.containerPesquisa}>
              <Inputs style={styles.inputs} placeholder="Pesquise Aqui:" />
              <View>
                <Button style={styles.buttonV} styleTxt={styles.txtButtonV} ButtonName="Pesquisar"/>
              </View>
          </View>
        </View>
      <View style={styles.containerBody}>
        <ItemTickets />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerPesquisa:{
    width: '100%',
    flex: 2,
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  containerBody:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 15,
  },
  txt:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 15,
    marginBottom: 20,
    marginTop: 20,
  },
  img:{
    width: '100%',
    height: 80,
    resizeMode: 'stretch',
    borderWidth: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  inputs:{
    width: '100%',
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
  buttonV:{
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01A8FA',
  },
  txtButtonV:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
});
