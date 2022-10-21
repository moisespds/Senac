import React from "react";
import { View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from '@expo/vector-icons/Entypo'




import Dashboard from "../pages/dashboard/Index";
import MyTickets from "../pages/dashboard/MyTickets"
import LogOut from "../pages/cadastro/LogOut";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
            <Drawer.Navigator screenOptions={{
                drawerStyle:{ backgroundColor: '#c6cbef',}, headerStyle:{backgroundColor: '#73F2FF'},
            }}>
                <Drawer.Screen
                name="DashboardDrawer"
                component={Dashboard}
                />
                <Drawer.Screen 
                name="MyTicketsDrawer"
                component={MyTickets}
                />
                <Drawer.Screen 
                name="LogOutDrawer"
                component={LogOut}
                />
            </Drawer.Navigator>
    )
}