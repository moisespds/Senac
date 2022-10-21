import React, { useContext } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import News from "./News";
import NewsPages from "./NewsPage";
import Settings from "./Settings";

export default function TabNews() {

    const Tab = createBottomTabNavigator();
        
  return (
    <Tab.Navigator>
      <Tab.Screen name="NewsPage" component={NewsPages} />
      <Tab.Screen name="Settings" component={Settings} options={{          
            title: 'Settings',
            headerStyle: {
              backgroundColor: '#CACACA',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },}}/>
      
    </Tab.Navigator>
  );
}
