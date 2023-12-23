import React from 'react'
import { Container, NormalText, Title, User } from './styled'

interface PostProps{
  item: {
    id: string;
    user: string;
    title: string;
    body: string;
  };
}

export const PubliForm = ({item} : PostProps) => {
  return (
    <Container activeOpacity={0.9}>
        <Title>{item.title}</Title>
        <User>{item.user}</User>
        <NormalText>{item.body.substring(0, 255) + '...'}</NormalText>

    </Container>
  );
};
