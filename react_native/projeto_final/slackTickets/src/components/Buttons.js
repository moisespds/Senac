import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';

export default function Button(props) {
  return (
    <View>
      <TouchableOpacity style={props.style} onPress={props.onPress}><Text style={props.styleTxt}>{props.ButtonName}</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
});
