import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styled';

export function TextArea({ ...rest }: TextInputProps) {
  return <Container multiline {...rest} />
}