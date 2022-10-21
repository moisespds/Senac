import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Button, } from "react-native";


import Dashboard from "../pages/dashboard/Index";
import MyTickets from "../pages/dashboard/MyTickets"
import Logout from "../pages/cadastro/Logout";
import TabRoutes from "./TabRoutes";

export default function DrawerNav(){
    
    const Drawer = createDrawerNavigator();

    return(
                <Drawer.Navigator>
                    <Drawer.Screen name="TabRoutes" component={TabRoutes} options={{ headerTitle:"Home", 
                        headerStyle: {backgroundColor: '#01A8FA' }, 
                         headerTitleStyle:{fontSize: 25, fontWeight: 'bold'},
                         }} />
                    <Drawer.Screen name="Logout" component={Logout} options={{ headerTitle:"Settings", 
                         headerStyle: {backgroundColor: '#01A8FA' }, 
                         headerTitleStyle:{fontSize: 25, fontWeight: 'bold'},
                         }} />
                </Drawer.Navigator>
    )
}