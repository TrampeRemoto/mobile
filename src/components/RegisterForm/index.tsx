import React, { useRef } from "react";
import { Formik } from "formik";
import * as Yup from 'yup'

import Input from "../Input";

import * as S from './styles'
import { TextInput } from "react-native";

type registerInfo = {
  name:string
  email:string
  password:string
}

const schema = Yup.object().shape({
  name:Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

function RegisterForm() {
  const emailInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  const handleRegister = (values:registerInfo)=>{
    console.log(values)
    
  }

  return (
    <S.Container>
      <Formik
        validationSchema={schema}
        initialValues={{name:'',email:'',password:''}}
        onSubmit={(values)=>handleRegister(values)}
      >
        {({handleChange,handleBlur,handleSubmit,values,errors})=>(
          <>
            <Input 
              placeholder="Nome"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              error={errors.name}
              
              autoCorrect={false}
              onSubmitEditing={()=>{
                emailInputRef.current?.focus()
              }}
            />
            <Input 
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              error={errors.email}

              autoCorrect={false}
              ref={emailInputRef}
              keyboardType="email-address"
              onSubmitEditing={()=>{
                passwordInputRef.current?.focus()
              }}
            />
            <Input 
              ref={passwordInputRef}
              onSubmitEditing={()=>handleSubmit()}
              returnKeyType="send"

              placeholder="Senha" 
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
            />
            
            <S.Button onPress={()=>handleSubmit()}>
              <S.ButtonText>Registrar</S.ButtonText>
            </S.Button>
          </>
        )}
        
      </Formik>
    </S.Container>
  )
}

export default RegisterForm