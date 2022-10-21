import React, {useEffect, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const login = async (email, password) => {
        if(email == "a@a.com" && password =="123"){
            const users= {
                email: "a@a.com",
                name: "joselito"
            }
            setUser(users)
            try{
                await AsyncStorage.setItem('users', JSON.stringify(users))
            }catch(err){
                setUser(null)
                console.log(err)
            }
        }
        else {
            setUser(null);
        }
    }

    const logout = async () => {
        try{
            await AsyncStorage.setItem('users')
            setUser(null)
        }catch(err){
            setUser(null)
            console.log(err)
        }
    }

    const read = async () => {
        try{
         const r = await AsyncStorage.getItem('users')
            setUser( r != null ? JSON.parse(r) : null)
        }catch(err){
            setUser(null)
            console.log(err)
        }
    }

    const authorized = user  != null
    
    useEffect(() => {
        read()
    }, [])

    return (
        <AuthContext.Provider value={{user, authorized, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}