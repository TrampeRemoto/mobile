import React from "react";
import {createStackNavigator} from '@react-navigation/stack'
import Dashboard from '../screens/Dashboard'

function AppRoutes() {
    const Stack = createStackNavigator()

   return(
    <Stack.Navigator headerMode="none">
         
        <Stack.Screen name="Dashboard" component={Dashboard} />

    </Stack.Navigator>
   )
}

export default AppRoutes