import { View, StyleSheet } from 'react-native'

import Banner from '../components/Banner'

export default function HomePage() {
    return(
        <View style={styles.containerHome}>
            <Banner />
        </View>
    )
}

const styles = StyleSheet.create({
    containerHome:{
        flex: 1,
    }
})