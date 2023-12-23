import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
    Container,
    Title,
    UserText,
    NormalText,
  } from './styled';
  
  export type PostProps = {
    id: string;
    titulo: string;
    name: string;
    description: string;
  }

  type Props = {
    data: PostProps;
  };

  export function Post({ data }: Props) {
  
    return (
      <Container>
        <Title>{data.titulo}</Title>
        <UserText>{data.name}</UserText>
        <NormalText>{data.description}</NormalText>
      </Container>
    );
  }