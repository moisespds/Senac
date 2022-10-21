import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity, Image} from "react-native";

export default function ImageA(props){

    return(
            <View style={styles.container}>
               <Image style={props.style} source={props.image} />
            </View>
    )
}

const styles = StyleSheet.create({

})