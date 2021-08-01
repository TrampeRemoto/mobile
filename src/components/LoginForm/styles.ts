import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  width: 95%;
  margin-top: auto;
`
export const Button = styled(RectButton)`
  background-color: #8A3AC8;
  border-radius:10px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top:30px;
  margin-bottom:25px;
`

export const ButtonText = styled.Text`
  font-size: 18px;
  color:#fff;
`

