import styled from "styled-components/native";
import {Dimensions} from 'react-native'
const {height} = Dimensions.get('window')

export const Container = styled.View`
    width: 100%;
    flex: 1;
    min-height: ${height}px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const LoginText = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color:#424242;
`