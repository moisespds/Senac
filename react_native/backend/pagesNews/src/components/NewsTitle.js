import React from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NewsTitle(props){

    const navigation = useNavigation()

    return(
            <View style={styles.container}>
               <Text style={styles.titleHeader}>{props.titleHeader}</Text>
               <Text style={styles.title}>{props.title}</Text>
            </View>
    )
}

const styles = StyleSheet.create({
    titleHeader:{
        flex: 1,
        fontSize: 18,
    },
    title:{
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})