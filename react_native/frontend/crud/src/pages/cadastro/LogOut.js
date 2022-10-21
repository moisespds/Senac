import React from "react";
import { useContext } from "react";
import { View, StyleSheet, Text} from "react-native";
import { useNavigation } from '@react-navigation/native';

import Button from "../../components/Buttons";
import Images from "../../components/Images";


export default function LogOut() {

    const navigation = useNavigation()

    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
            <Images style={styles.img} image={require('../../../assets/perfil.png')} />
        </View>
        <View style={styles.txtContainer}>
            <Text style={styles.txt}>@Moises Prado</Text>
        </View>
        <View>
            <Button
            style={styles.button}
            styleTxt={styles.txtButton}
            onPress={() => navigation.navigate('LogIn')}
            ButtonName="Sair"
            />
        </View>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      flex: 1,
      backgroundColor: '#73F2FF',
      justifyContent: 'center',
    },
    imgContainer:{
        marginBottom: 20,
    },
    txtContainer:{
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    },
    button:{
        width: '95%',
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#ff0000',
        marginLeft: 10,
      },
      txtButton:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
      },
      txt:{
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000'
      },
      img:{
        width: '95%',
        height: 250,
        marginLeft: 10,
        resizeMode: 'stretch'
      }
  });
  