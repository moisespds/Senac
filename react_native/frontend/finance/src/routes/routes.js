import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Dashboard from "../pages/dashboard";
import Cadastro from "../pages/cadastro";
import Options from "../pages/dashboard/Options";

const Stack = createNativeStackNavigator()

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Options" component={Options} />
        </Stack.Navigator>
    )
}

