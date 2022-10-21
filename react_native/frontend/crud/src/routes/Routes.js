import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import LogIn from "../pages/cadastro/Index";
import SignIn from "../pages/cadastro/SignIn";
import TabRoutes from "./TabRoutes";

const Stack = createNativeStackNavigator();

export default function Routes(){

    return(
        <Stack.Navigator >
            <Stack.Screen 
            name="LogIn"
            component={LogIn}
            options={{headerStyle:{ backgroundColor: '#2C3B3B'}, headerTitleStyle:{ fontSize: 25, fontWeight: 'bold', color:"#fff"}}}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerStyle:{ backgroundColor: '#2C3B3B'}, headerTitleStyle:{ fontSize: 25, fontWeight: 'bold', color:"#fff"}}}
            />
            <Stack.Screen 
            name="TabRoutes"
            component={TabRoutes} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}