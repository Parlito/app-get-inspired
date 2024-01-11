import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

import { Container } from './styled';

export function LogoutButton({ ...rest }: RectButtonProps) {

  return (
    <Container {...rest}>
      <MaterialIcons name="logout" size={18} color="white" />
    </Container>
  )
}