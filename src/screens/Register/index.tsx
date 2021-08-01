import React from 'react'
import LoginSocial from '../../components/LoginSocial'
import RegisterForm from '../../components/RegisterForm'
import * as S from './styles'

function Register() {
    return(
        <S.Container>
            {/* <S.RegisterText>Register</S.RegisterText> */}
            <RegisterForm/>
            <LoginSocial/>
        </S.Container>
    )
}
export default Register