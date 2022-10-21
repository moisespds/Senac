import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Title(props) {
  return (
    <Text style={styles.title}>{props.title}</Text>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: 'bold',
    }
})