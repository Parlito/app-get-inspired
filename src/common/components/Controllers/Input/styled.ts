import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

export const Container = styled.View`
  width: 100%;
  margin-bottom: 12px;
`;

export const Input = styled(TextInput)<TextInputProps>`
  width: 100%;
  height: 56px;
  background-color: white;
  border-radius: 12px;
  font-size: 14px;
  padding: 7px 0;
  padding-left: 20px;
  border: 1px solid black;
  color: black;
`;
