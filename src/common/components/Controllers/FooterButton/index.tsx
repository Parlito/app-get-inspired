import React from 'react'
import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, Title } from './styled';

type Props = TouchableOpacityProps & {
    title: string;
    icon: keyof typeof MaterialIcons.glyphMap;
}


function FooterButton({title, icon, ...rest}: Props) {
  return (
    <Container {...rest}>
        <MaterialIcons name={icon} size={24} color={'black'}/>
        <Title>{title}</Title>
    </Container>
  )
}

export default FooterButton