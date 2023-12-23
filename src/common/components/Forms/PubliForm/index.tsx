import React, { useState } from 'react'
import { Container, NormalText, Title, User } from './styled'
import Input from '../../Controllers/Input';
import Button from '../../Controllers/Button';

interface PostProps{
  item: {
    user: string;
    title: string;
    body: string;
  };
  id: string;
}

export const PubliForm = ({item, id} : PostProps) => {

  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewPubli() {
    setIsLoading(true);
  }

  return (
    <Container>
      <Title>Nova publicação</Title>
      <Input placeholder='Título da publicação' onChangeText={setTitulo}/>
      <Input placeholder='Sua história' onChangeText={setDescription}/>

      <Button title='Publicar!' isLoading={isLoading} onPress={handleNewPubli}/>
    </Container>
  );
};
