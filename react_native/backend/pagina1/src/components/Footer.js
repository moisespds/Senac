import { View, StyleSheet, Text } from 'react-native'

export default function Footer() {
    return(
        <View style={styles.containerFooter}><Text>Footer</Text></View>
    )
}

const styles = StyleSheet.create({
    containerFooter:{
        borderColor: "blue",
        borderWidth: 1,
    }
})