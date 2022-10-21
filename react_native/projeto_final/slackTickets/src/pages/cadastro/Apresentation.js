import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Buttons';

export default function Apresentation(props) {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Text style={styles.title}># Slack Tickets</Text>
        <Text style={styles.txt}>A slack tickets e o maior marcket place de bilheteria online do mundo com foco na praticidade e economia em grandes e pequenos eventos, na Slack voce compra seus ingressos online direto com o organizador e tem o acesso facilitado gracas as tecnologia por tras do nosso appdiminuindo tempo na fila e praticidade na venda</Text>
      </View>
      <View style={{flex: 1}}>
        <Button style={styles.button} styleTxt={styles.txtButton} onPress={() => navigation.navigate('LogIn')} ButtonName='Acessar'/>
      </View>
        <View style={styles.footer}>
          <Text style={styles.txtFooter}>Contato: (14)9999-9999 / E-mail: slack_tickets@gmail.com</Text>
          <Text style={styles.txtFooter}>Endereco: Prime Square sala 101, Av. Getúlio Vargas, 22-25 - Jd. Europa, Bauru - SP, 17017-383</Text>
        </View>
    </View>
      );
    }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInputs:{
  },
  containerImg:{
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
  img:{
    width: '100%',
    height: 250,
    resizeMode: 'stretch'
  },
  title:{
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25,
  },
  txt:{
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 5,
  },
  footer:{
    justifyContent: 'flex-end',
    width: '100%',
    borderWidth: 1,
    backgroundColor: '#01A8FA',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 3,
  },
  txtFooter:{
    fontWeight: "bold",

  }
});
