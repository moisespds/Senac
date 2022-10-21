import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating-widget';

import Images from './Images';

export default function ItemTickets(props) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Images image={require("../../assets/retrotickets.png")} style={styles.img} />
      </View>
      <View style={styles.containerTxt}>
        <Text style={styles.title}>Rock In Rio 2023!!!</Text>
        <Text style={styles.subtitle}>Ingressos disponiveis para o rock in rio 2023</Text>
        <View style={styles.containerAva}>
        <StarRating rating={4.5} starSize={25} color={'#E07F00'}/>
        </View>
        <Text style={styles.disponibilitie}>Disponiel!!!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
container:{
    width: '95%',
    flex: 1,
    margin: 8,
    backgroundColor: '#CACACA',
    borderRadius: 10,
},
containerTxt:{
    marginLeft: 30,
},
containerImg:{
    width: '100%'
},
containerAva:{
    marginBottom: 10,
},
img:{
    width: '100%',
    height: 300,
    resizeMode: "stretch",
    borderRadius: 10,
    marginBottom: 10,
},
title:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 5,
},
subtitle:{
    width: '60%',
    fontSize: 15,
    fontWeight: '500',
    paddingBottom: 5,
},
disponibilitie:{
    width: '50%',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#00ff00',
    textAlign: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingBottom: 5,
},
indisponibilitie:{
    width: '50%',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#ff0000',
    borderRadius: 10,
}
});
