import React from "react";
import {TextInputProps} from 'react-native'

import * as S from './styles'

type InputProps = {
  active?:boolean
} & TextInputProps

function Input({ ...rest}:InputProps) {
  return (
    <S.Container>
      <S.Input {...rest}/>
    </S.Container>
  )
}

export default Input