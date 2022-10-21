import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        if(email == "a@a.com" && password =="123"){
           const user = {
                email: "a@a.com",
                name: "joselito"
            }
            setUser(user)
            try{
                await AsyncStorage.setItem("user", JSON.stringify(user))
            
        }catch (err) {
            console.log(err)
        }
    }
    else{
        setUser(null)
    }
}

    const logout = async () => {
        setUser(null)
        try{
            await AsyncStorage.setItem("user", null)
        }catch (err) {
            console.log(err)
        }
    }

    const carregar = async () => {
        try{
           const v = await AsyncStorage.getItem("user")
           setUser( v != null ? JSON.parse(v) : null) 
        }catch (err) {
            setUser(null)
            console.log(err)
        }
    }

    useEffect(() => {
        carregar()
    }, [])

    const authorized = user != null
    
    return (
        <AuthContext.Provider value={{user, authorized, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}