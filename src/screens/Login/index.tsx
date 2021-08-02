import React from 'react'
import LoginForm from '../../components/LoginForm'
import LoginSocial from '../../components/LoginSocial'

import * as S from './styles'

function Login() {
    return(
        <S.Container>
            <LoginForm/>
            <LoginSocial/>
        </S.Container>
    )
}
export default Login