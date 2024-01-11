import styled from 'styled-components/native';
import { TextInput, TextInputProps } from 'react-native';

export const Container = styled(TextInput).attrs<TextInputProps>(({}) => ({})) <TextInputProps>`
  width: 100%;
  height: 100px;
  background-color: white;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  color: black;
`;