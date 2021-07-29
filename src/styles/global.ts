import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    background: #18191F;
    width: 100%;
    height: 100%;
    display: flex;

    position: relative;
`

export const ImgsContainer = styled.View`
    background: #18191F;
    width: 100%;
    height: 50%;
    margin-top:20%;
    
`
export const BackgroundImage = styled.Image`
border-radius: 80px;
width: 100%;
/* border: 1px #18191F; */
`

export const TextContainer = styled.View`
    background: #ffffff;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;

    padding:5% 5%;
    position: absolute;
    bottom: 0;
`

export const Dots = styled.View`
    /* background: #000; */
   margin-top: 4%;
   margin-left:2%;
`

export const Title = styled.Text`
    font-size:32px;
    color:#424242;
    font-weight: bold;
    margin-top:50px;
    
`

export const SubTitle= styled.Text`
    color:#000;
    font-size: 19px;
    margin-top:5%;
`
export const ButtonContainer = styled.View`
    margin-top: 10%;
    margin-bottom:5%;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
`

export const Button = styled(RectButton)`
    background: #8A3AC8;
    
    padding: 15px 25px;
    border-radius: 10px;

    box-shadow: 10px 5px 5px #000;
`

export const ButtonText = styled.Text`
    color:#ffffff;
    font-size: 15px;
`
