import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const StyledTitle = styled.Text`
  color: black;
	font-size: 22px;
	padding: 5px 0;
`
export const RoundedView = styled.View`
	padding: 20px;
	border-radius: 20px;
	background: white;
	margin: 10px 0;
`
export const BoldText = styled.Text`
	font-weight: bold;
	padding: 0 0 10px 0;
	font-size: 14px;
`
export const OtherText = styled.Text`
	font-size: 14px;
	padding: 5px 0;
`
export const Container = styled.View`
	flex:1;
	padding: 10px;
	background: #3e3e3e;
`
export const Input = styled(TextInput)`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  border: none;
  background:white;
  border-radius: 15px;
  ::placeholder {
    color: palevioletred;
  }
`

export const CenteredText = styled.Text`
	text-align: center;
	padding: 0 30px;
	color: white;
	font-size: 30px;
`

export const Clickable = styled.Text`
margin: 0 20px;
color: white;
font-size: 16px;
`