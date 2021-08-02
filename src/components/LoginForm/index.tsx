import React from "react";
import { useRef } from "react";
import { TextInput } from "react-native";
import Input from "../Input";

import * as S from './styles'

function LoginForm() {
  const passwordInputRef = useRef<TextInput>(null);

  return (
    <S.Container>
      <Input 
        placeholder="Email" 
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={()=>{
          passwordInputRef.current?.focus()
        }}
      />
      <Input 
        ref={passwordInputRef}
        placeholder="Senha" 
        secureTextEntry
        returnKeyType="send"
        onSubmitEditing={()=>console.log('enviou')}
      />
      
      <S.Button>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  )
}

export default LoginForm