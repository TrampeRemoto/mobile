import React from "react";
import Input from "../Input";

import * as S from './styles'

function LoginForm() {
  return (
    <S.Container>
      <Input placeholder="Email"/>
      <Input placeholder="Senha" secureTextEntry/>
      
      <S.Button>
        <S.ButtonText>Entrar</S.ButtonText>
      </S.Button>
    </S.Container>
  )
}

export default LoginForm