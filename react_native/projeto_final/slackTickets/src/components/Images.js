import { StyleSheet, Text, View, StatusBar, Image } from 'react-native';

export default function Images(props) {

  return (
    <View>
      <Image style={props.style} source={props.image}/>
    </View>
  );
}

const styles = StyleSheet.create({

});
