import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Login from "../screens/Login";
import Register from "../screens/Register";

function AuthRoutes() {
    const Stack = createStackNavigator()

   return(
    <Stack.Navigator headerMode="none">
         
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />

    </Stack.Navigator>
   )
}

export default AuthRoutes