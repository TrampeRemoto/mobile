import React, { useImperativeHandle, useRef,forwardRef } from "react";
import {TextInputProps} from 'react-native'
import { TextInput } from "react-native-gesture-handler";

import * as S from './styles'

type InputProps = {
  active?:boolean
} & TextInputProps

interface InputRefProps {
  focus():void
}

const Input:React.ForwardRefRenderFunction<InputRefProps,InputProps> = ({ ...rest}:InputProps,ref) => {
  const inputRef = useRef<any>(null)
  useImperativeHandle(ref,()=>({
    focus(){
      inputRef.current.focus()
    }
  }))
  
  return (
    <S.Container>
      <S.Input ref={inputRef} {...rest}/>
    </S.Container>
  )
}

export default forwardRef(Input)