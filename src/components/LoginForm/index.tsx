import React from "react";
import { useState } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { TextInput } from "react-native";

import {Formik} from 'formik'
import * as Yup from 'yup'

import Input from "../Input";

import * as S from './styles'

type LoginInfo = {
  email:string
  password:string
}

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

function LoginForm() {
  const passwordInputRef = useRef<TextInput>(null);

  const handleLogin = useCallback(async(values:LoginInfo) => {
    console.log(values);
  },[])

  return (
    <S.Container>
      <Formik 
        validationSchema={schema}
        initialValues={{email:'',password:''}}
        onSubmit={(values)=>handleLogin(values)}
      >
        {({handleChange,handleBlur,handleSubmit,values,errors})=>(
          <>
            <Input 
              error={errors.email}
              placeholder="Email" 
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={()=>{
                passwordInputRef.current?.focus()
              }}
              onBlur={handleBlur('email')}
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Input 
              error={errors.password}
              ref={passwordInputRef}
              placeholder="Senha"
              secureTextEntry
              returnKeyType="send"
              onChangeText={handleChange('password')}
              onSubmitEditing={()=>handleSubmit()}
              onBlur={handleBlur('password')}
              value={values.password}
            />
          
          <S.Button onPress={()=>handleSubmit()} >
            <S.ButtonText>Entrar</S.ButtonText>
          </S.Button>
        </>
        )}
      </Formik>

    </S.Container>
  )
}

export default LoginForm