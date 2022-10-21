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
                name="Dashboard"
                component={Dashboard}
                options={{tabBarActiveBackgroundColor: '#6878E8', tabBarInactiveBackgroundColor: '#8873FF', tabBarLabel:'Home', tabBarLabelStyle:{ color: '#000', fontWeight: 'bold'}, headerTitle:"Home", headerStyle: {backgroundColor: '#73F2FF' }, headerTitleStyle:{fontSize: 25, fontWeight: 'bold'},
                tabBarIcon: ({ color, size }) => (<Icon name="home" color={'#000'} size={25} />),}}
                />
                <Tab.Screen 
                name="MyTickets"
                component={MyTickets}
                options={{tabBarActiveBackgroundColor: '#6878E8', tabBarInactiveBackgroundColor: '#8873FF', tabBarLabel:'My Tickets', tabBarLabelStyle:{ color: '#000', fontWeight: 'bold'}, headerTitle:"My Tickects", headerStyle: {backgroundColor: '#73F2FF' }, headerTitleStyle:{fontSize: 25, fontWeight: 'bold'},
                tabBarIcon: ({ color, size }) => (<Icon name="ticket" color={"#000"} size={25}/>),}}
                />
                <Tab.Screen 
                name="LogOut"
                component={LogOut}
                options={{tabBarActiveBackgroundColor: '#6878E8', tabBarInactiveBackgroundColor: '#8873FF', tabBarLabel:'Profile', tabBarLabelStyle:{ color: '#000', fontWeight: 'bold'}, headerTitle:"Profile", headerStyle: {backgroundColor: '#73F2FF' }, headerTitleStyle:{fontSize: 25, fontWeight: 'bold'},
                tabBarIcon:({ color, size }) => (<Icon name="user" color={"#000"} size={25}/>),}}
                />
            </Tab.Navigator>
    )
}