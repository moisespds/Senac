import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function ButtonRow(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.style} onPress={props.onPress}><Text style={props.styleTxt}>{props.ButtonName}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
  },
});
