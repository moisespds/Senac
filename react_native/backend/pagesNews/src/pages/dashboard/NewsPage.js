import React, { useContext }  from "react";
import { StyleSheet, SafeAreaView, View, StatusBar, Text, TouchableOpacity} from "react-native";

import Header from "../../components/Header";
import NewsList from "../../components/NewsList";
import TabNews from "./TabNews";
import { NewsContext } from "../../contexts/NewsContext";

export default function NewsPages(){

    const {news} = React.useContext(NewsContext)

    return(
            <View style={styles.container}>
               <NewsList noticias={news} />
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 2,
        flexWrap: 'wrap'
      },
})