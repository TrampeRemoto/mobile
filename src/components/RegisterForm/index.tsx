import React from "react";
import Input from "../Input";

import * as S from './styles'

function RegisterForm() {
  return (
    <S.Container>
      <Input placeholder="Nome"/>
      <Input placeholder="Email"/>
      <Input placeholder="Senha" secureTextEntry/>
      
      <S.Button>
        <S.ButtonText>Registrar</S.ButtonText>
      </S.Button>
    </S.Container>
  )
}

export default RegisterForm