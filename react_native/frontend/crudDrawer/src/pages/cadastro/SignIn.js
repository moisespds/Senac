import { StyleSheet, Text, View } from 'react-native';
import FormSignIn from '../../components/FormSignIn';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <FormSignIn/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#2C3B3B',
  },
});
