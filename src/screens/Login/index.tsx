import React from 'react'
import LoginSocial from '../../components/LoginSocial'

import * as S from './styles'

function Login() {
    return(
        <S.Container>
            <S.LoginText>Login</S.LoginText>
            <LoginSocial/>
        </S.Container>
    )
}
export default Login