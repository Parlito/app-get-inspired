import React from 'react'
import { Container, Load, Title } from './styled'
import { RectButtonProps } from 'react-native-gesture-handler';

type Props = RectButtonProps & {
    title: string;
    isLoading?: boolean;
  };

function Button({ title, isLoading = false, ...rest} : Props) {
  return (
    <Container enabled = {!isLoading} {...rest}>
        {isLoading ? <Load/> : <Title>{title}</Title>}
    </Container>
  )
}

export default Button