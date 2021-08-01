import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
 display: flex;
 flex-direction: column;

 width: 95%;
 margin-bottom:15%;
`

export const Separetor = styled.View`
  height:2px;
  background-color: #DEDEDE;
  border-radius: 1px;

  margin:35px 10%;
  position:relative;
`
export const SeparetorText = styled.Text`
  font-size: 20px;
  background-color: #fff;
  text-align: center;

  width:50px;
  position:absolute;
  bottom:-12px;
  left:50%;
  transform: translateX(-25px);
`


export const Border = styled.View`
  border-style: solid;
  border-color: #999999;
  border-width: 2px;
  border-radius: 10px;
  margin-bottom:16px;
`

export const Button = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;

  position: relative;

  height:56px;
`

export const ButtonText = styled.Text`
  font-size: 18px;

  margin: auto;
`


export const Icon = styled.Image`
  height: 24px;
  position: absolute;
  left:20px;
`


export const AppleIcon = styled(Icon)`
  width:22px;
`
export const FacebookIcon = styled(Icon)`
  width:24px;
`
export const GoogleIcon = styled(Icon)`
height: 22px;
  width:24px;
`
