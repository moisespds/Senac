import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@expo/vector-icons/AntDesign"

import LogIn from "../pages/cadastro/LogIn";
import SignIn from "../pages/cadastro/SignIn";
import TabTickets from "./TabRoutes";
import Apresentation from "../pages/cadastro/Apresentation"
import DrawerNav from "./DrawerRoutes";

const Stack = createNativeStackNavigator();

export default function Routes(){

    return(
        <Stack.Navigator >
            <Stack.Screen
            name="DrawerNav"
            component={DrawerNav}
            options={{headerShown: false }}
            />
            <Stack.Screen 
            name="Apresentation"
            component={Apresentation}
            options={{headerStyle:{ backgroundColor: '#01A8FA'}, headerTitleStyle:{ fontSize: 20, fontWeight: 'bold', color:"#fff"}}}
            />

            <Stack.Screen 
            name="LogIn"
            component={LogIn}
            options={{headerStyle:{ backgroundColor: '#01A8FA'}, headerTitleStyle:{ fontSize: 20, fontWeight: 'bold', color:"#fff"}}}
            />

            <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerStyle:{ backgroundColor: '#01A8FA'}, headerTitleStyle:{ fontSize: 20, fontWeight: 'bold', color:"#fff"}}}
            />

        </Stack.Navigator>
    )
}