import { StatusBar } from 'expo-status-bar';
import React from 'react';
import dots from './assets/img/dots.png'

import welcomeimage from './assets/img/welcomeimage.png'

import * as S from './src/styles/global'
import { Image } from 'react-native';

export default function App() {
  return (
    <S.Container >
      <StatusBar style="light"/>

      <S.ImgsContainer>
        <S.BackgroundImage source={welcomeimage}/>
      </S.ImgsContainer>

      <S.TextContainer>
        <S.Dots>
          <Image source={dots}/>
        </S.Dots>

        <S.Title>Encontre o emprego dos seus sonhos</S.Title>
        <S.SubTitle>
        Empregos remotos em tecnologia, 
        mídias sociais, marketing, design, 
        edição, finanças e mais!
        </S.SubTitle>
        
        <S.ButtonContainer>
        <S.Button onPress={()=>{}}>
          <S.ButtonText>
            Começar
            </S.ButtonText>
          </S.Button>
        <S.Button>
          <S.ButtonText>
            Já tenho uma conta
          </S.ButtonText>
        </S.Button>
        </S.ButtonContainer>

      </S.TextContainer>

    </S.Container>
  );
}

