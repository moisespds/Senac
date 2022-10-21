import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LogIn from "../pages/cadastro/LogIn";
import NewsPages from "../pages/dashboard/NewsPage";
import SignIn from "../pages/cadastro/SignIn";
import News from "../pages/dashboard/News";
import TabNews from "../pages/dashboard/TabNews";
import { AuthContext } from "../contexts/Auth";
import Settings from "../pages/dashboard/Settings";
import PassRecover from "../pages/dashboard/PassRecover";

const Stack = createNativeStackNavigator();

export default function Routes() {
  const { user, authorized, login, logout } = React.useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="TabNews">
      {!authorized ? (
        <>
          <Stack.Screen name="LogIn" component={LogIn} options={{          
            title: 'Entre',
            headerStyle: {
              backgroundColor: '#CACACA',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },}} />
          <Stack.Screen name="SignIn" component={SignIn} options={{          
            title: 'Cadastre-se',
            headerStyle: {
              backgroundColor: '#CACACA',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },}} />
          <Stack.Screen name="PassRecover" component={PassRecover} options={{          
            title: 'Recupere sua Senha',
            headerStyle: {
              backgroundColor: '#CACACA',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },}} />
        </>
      ) : (
        <>
          <Stack.Screen
            name="TabNews"
            component={TabNews}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="News" component={News} options={{          
            title: 'Top News',
            headerStyle: {
              backgroundColor: '#CACACA',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },}} />
        </>
      )}
    </Stack.Navigator>
  );
}
