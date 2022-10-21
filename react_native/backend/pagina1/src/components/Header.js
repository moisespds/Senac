import { View, StyleSheet, Text } from 'react-native'

import Logo from "./Logo"
import Nav from './Nav'
import UserInfo from './UserInfo'

export default function Header() {
    return(
        <View style={styles.containerHeader}>
            <Logo />
            <Nav />
            <UserInfo />
        </View>
    )
}

const styles = StyleSheet.create({
    containerHeader:{
        flexDirection: "row",
        borderColor: "blue",
        borderWidth: 1,
        justifyContent: "space-between",
    }
})