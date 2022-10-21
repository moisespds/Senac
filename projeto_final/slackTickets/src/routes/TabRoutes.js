import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/Entypo'




import Dashboard from "../pages/dashboard/Index";
import MyTickets from "../pages/dashboard/MyTickets"
import LogOut from "../pages/cadastro/LogOut";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

export default function TabRoutes(){
    return(
            <Tab.Navigator>
                <Tab.Screen
                name="DashboardTab"
                component={Dashboard}
                options={{tabBarActiveBackgroundColor: '#6878E8', tabBarInactiveBackgroundColor: '#01A8FA', 
                tabBarLabel:'Home', tabBarLabelStyle:{ color: '#000', fontWeight: 'bold'},
                headerShown:false,
                tabBarIcon: ({ color, size }) => (<Icon name="home" color={'#000'} size={25} />),}}
                />
                <Tab.Screen 
                name="MyTicketsTab"
                component={MyTickets}
                options={{tabBarActiveBackgroundColor: '#6878E8', tabBarInactiveBackgroundColor: '#01A8FA', 
                tabBarLabel:'My Tickets', 
                tabBarLabelStyle:{ color: '#000', fontWeight: 'bold'}, headerShown:false,
                tabBarIcon: ({ color, size }) => (<Icon name="ticket" color={"#000"} size={25}/>),}}
                />
            </Tab.Navigator>
    )
}