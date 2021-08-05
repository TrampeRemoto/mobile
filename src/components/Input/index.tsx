import React, { useImperativeHandle, useRef,forwardRef } from "react";
import {TextInputProps} from 'react-native'
import { TextInput } from "react-native-gesture-handler";

import * as S from './styles'

type InputProps = {
  active?:boolean
  error?:string
} & TextInputProps

interface InputRefProps {
  focus():void
}

const Input:React.ForwardRefRenderFunction<InputRefProps,InputProps> = ({error,active, ...rest}:InputProps,ref) => {
  const inputRef = useRef<any>(null)
  useImperativeHandle(ref,()=>({
    focus(){
      inputRef.current.focus()
    }
  }))
  
  return (
    <>
    <S.Container error={!!error}>
      <S.Input ref={inputRef} {...rest} error={!!error} placeholderTextColor={error ?'#EA4335': '#1C2439'}/>
    </S.Container>
    {error && <S.Error>{error}</S.Error>}
    </>
  )
}

export default forwardRef(Input)