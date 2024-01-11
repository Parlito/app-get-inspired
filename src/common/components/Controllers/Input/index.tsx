import React from 'react'
import { TextInputProps } from 'react-native';
import { Container } from './styled';

function Input({...rest}: TextInputProps) {
  return (
        <Container {...rest}/> 
  )
}

export default Input