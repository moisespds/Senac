import { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../contexts/Auth'

export default function UserInfo() {
    const { user, authorized, login, logout } = useContext(AuthContext)
    return(
        <View>
            {authorized && (
                <View>
                    <Text>Ola {user.name}!</Text>
                    <Button title='Sair' onPress={() => logout()}/>
                </View>
            )}
            {!authorized && (
                <View style={{flexDirection: "row"}}>
                    <Button title="Entrar" onPress={() => login("a@a.com", "123")} /> <Text>Ou</Text> <Button title='Registrar'/>
                </View>
            )}
        </View>
    )
}