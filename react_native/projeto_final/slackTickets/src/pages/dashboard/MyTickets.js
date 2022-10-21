import { StyleSheet, Text, View } from 'react-native';

export default function MyTickets() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Get In!!! It's Works</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000'
  }
});
