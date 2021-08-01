import React from 'react'
import { Image } from 'react-native'

import apple from '../../../assets/icons/apple.png'
import facebook from '../../../assets/icons/facebook.png'
import google from '../../../assets/icons/google.png'

import * as S from './styles'

function LoginSocial() {
  return(
    <S.Container>
      <S.Separetor>
        <S.SeparetorText>OU</S.SeparetorText>
      </S.Separetor>


      <S.Border>
        <S.Button>
            <S.AppleIcon  source={apple}/>
          <S.ButtonText>Entrar com a Apple</S.ButtonText>
        </S.Button>
      </S.Border>

      <S.Border>
        <S.Button>
            <S.FacebookIcon source={facebook}/>
          <S.ButtonText>Entrar com a Facebook</S.ButtonText>
        </S.Button>
      </S.Border>

      <S.Border>
        <S.Button>
          <S.GoogleIcon source={google}/>
          <S.ButtonText>Entrar com a Google</S.ButtonText>
        </S.Button>
      </S.Border>

    </S.Container>
  )
}
export default LoginSocial