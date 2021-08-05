import styled from "styled-components/native";

type Props = {
  error:boolean
}
export const Container = styled.View<Props>`

  background-color: #F1F4FA;
  /* width: 100%; */
  border-radius: 10px;
 
  height: 56px;
  margin-top: 15px;
  padding:16px 20px;
  border: 2px solid;
  border-color: ${({error})=> (error ?'#EA4335': '#F1F4FA')};
  `

export const Input = styled.TextInput<Props>`
  flex: 1;
  color: #1C2439;
  font-size: 18px;
  /* color: ${({error})=> (error ?'#EA4335': '#1C2439')}; */
`
export const Error = styled.Text`
  color:#EA4335;
  font-size: 14px;
  margin-left: 10px;
`