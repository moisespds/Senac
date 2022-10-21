import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NotaContext } from '../context/Notas';

export default function Resultado() {
  const {objBoletim, cor} = useContext(NotaContext)
  return (
    <View>
              { objBoletim.map((obj) => 
                <View style={styles.containerObj}>
                  <View style={styles.containerNome}>
                    <Text style={styles.txtSubTitle}>Nome:</Text>
                    <Text style={styles.txtObjNome}>{obj.name}</Text>
                  </View>
                  <View style={styles.containerNota}>
                  <Text style={styles.txtSubTitle}>1° Bi:</Text>
                  <Text style={[styles.txtObj, {color:cor(obj.nota1)}]}>{obj.nota1}</Text>
                  </View>                  
                  <View style={styles.containerNota}>
                    <Text style={styles.txtSubTitle}>2° Bi:</Text>
                    <Text style={[styles.txtObj, {color:cor(obj.nota2)}]}>{obj.nota2}</Text>
                  </View>                  
                  <View style={styles.containerNota}>
                    <Text style={styles.txtSubTitle}>3° Bi:</Text>  
                    <Text style={[styles.txtObj, {color:cor(obj.nota3)}]}>{obj.nota3}</Text>
                  </View>                  
                  <View style={styles.containerNota}>
                    <Text style={styles.txtSubTitle}>4° Bi:</Text>
                    <Text style={[styles.txtObj, {color:cor(obj.nota4)}]}>{obj.nota4}</Text>
                  </View>
                  <View style={styles.containerNome}>
                    <Text style={styles.txtSubTitle}>Media:</Text>
                    <Text style={[styles.txtObj, {color:cor(obj.media)}]}>{obj.media}</Text>
                  </View>
                </View>
               )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        
    },
    containerObj:{
      flexDirection: 'row',
      marginTop: 15,
  },
  containerNome:{
    flex: 3,
    padding: 3,
    marginRight: 3,
  },
  containerNota:{
    flex: 2,
    padding: 3,
    marginRight: 3,
  },
  txtObj:{
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  txtObjNome:{
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  txtObjMedia:{
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'right',
  },
  txtSubTitle:{
    fontSize: 18,
    fontWeight: 'bold',
  },
})