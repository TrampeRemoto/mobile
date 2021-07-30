import React from 'react'
import {NavigationContainer} from '@react-navigation/native'

import Loading from '../screens/loading'
import { useAuth } from '../hooks/Auth'
import AppRoutes from './AppRoutes'
import AuthRoutes from './AuthRoutes'

function Routes() {
    
    const {user,loading} = useAuth()

    if (loading) {
        return (
          <Loading/>
        )
      }

    return(
        <NavigationContainer>
            {true? <AppRoutes/> : <AuthRoutes/>}
        </NavigationContainer>
    )
}

export default Routes