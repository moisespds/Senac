import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={props.style} onPress={props.onPress} trailing={props.trailing}><Text style={props.styleTxt}>{props.ButtonName}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flexDirection: 'row',
   width: '50%'
  },
});
