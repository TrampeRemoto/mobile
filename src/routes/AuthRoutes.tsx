import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'

function AuthRoutes() {
    const Stack = createStackNavigator()

   return(
    <Stack.Navigator headerMode="none">
         
        <Stack.Screen name="Home" component={Welcome} />

    </Stack.Navigator>
   )
}

export default AuthRoutes