import { StyleSheet, Text, View } from 'react-native';

import FormLogIn from '../../components/FormLogIn';

export default function LogIn() {


  return (
    <View style={styles.container}>
      <FormLogIn/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C3B3B',
      },
      
});
