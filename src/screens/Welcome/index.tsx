import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import dots from '../../../assets/img/dots.png'
import welcomeimage from '../../../assets/img/welcomeimage.png'

import * as S from './styles'

function Welcome() {
  const navigation = useNavigation()

  return (
    <S.Container >
      <StatusBar style="light"/>

      <S.ImgsContainer>
        <S.BackgroundImage source={welcomeimage}/>
      </S.ImgsContainer>

      <S.TextContainer>
        <S.Dots>
          <Image source={dots} width={60}/>
        </S.Dots>

        <S.Title>Encontre o emprego dos seus sonhos</S.Title>
        <S.SubTitle>
        Empregos remotos em tecnologia, 
        mídias sociais, marketing, design, 
        edição, finanças e mais!
        </S.SubTitle>
        
        <S.ButtonContainer>

          <S.Button onPress={()=>{navigation.navigate('Register')}}>
            <S.ButtonText>
              Começar
              </S.ButtonText>
          </S.Button>

          <S.LoginButton>
            <S.LoginButtonText onPress={()=>{navigation.navigate('Login')}}>
              Já tenho uma conta
            </S.LoginButtonText>
          </S.LoginButton>

        </S.ButtonContainer>

      </S.TextContainer>

    </S.Container>
  );
}
export default Welcome
