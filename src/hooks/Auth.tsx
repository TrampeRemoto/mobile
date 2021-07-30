
import React, {
    createContext,
    useState,
    useContext,
  } from 'react'
//   import AsyncStorage from '@react-native-community/async-storage'
//   import api from '../services/api'
  
  interface SignInCretentials {
    email: string
    password: string
  }
  
  interface User {
    id: string
    name: string
    email: string
    avatar_url: string
  }
  interface AuthContextData {
    user: User
    loading: boolean
  }
  
  export interface AuthState {
    token: string
    user: User
  }
  
  const AuthContext = createContext<AuthContextData>({} as AuthContextData)
  
  export function useAuth(): AuthContextData {
    const context = useContext(AuthContext)
    if (!context) {
      throw new Error('AuthContext must be user whitin an AuthProvider')
    }
    return context
  }
  
  export const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState)
    const [loading, setLoading] = useState(false)
    
  
    // const signIn = useCallback(async ({ email, password }) => {
      
    // }, [])
    // const signUp = useCallback(async () => {
    // }, [])
  

  
    return (
      <AuthContext.Provider
        value={{ user: data.user, loading}}
      >
        {children}
      </AuthContext.Provider>
    )
  }