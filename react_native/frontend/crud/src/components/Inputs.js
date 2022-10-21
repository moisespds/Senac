import { StyleSheet, Text, View, StatusBar, TextInput } from 'react-native';

export default function Inputs(props) {
  return (
    <View>
        <TextInput style={props.style} placeholder={props.placeholder} onChangeText={props.onChangeText} value={props.value}/>
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
});
