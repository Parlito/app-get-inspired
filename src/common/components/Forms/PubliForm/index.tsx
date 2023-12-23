import React, { useState } from 'react'
import { Container, NormalText, Title, User } from './styled'
import Input from '../../Controllers/Input';
import Button from '../../Controllers/Button';
import { TextArea } from '../../Controllers/TextArea';

interface PostProps{
  item: {
    user: string;
    title: string;
    body: string;
  };
  id: string;
}

export const PubliForm = () => {

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
      <TextArea placeholder='Sua história' onChangeText={setDescription}/>

      <Button title='Publicar!' isLoading={isLoading} onPress={handleNewPubli}/>
    </Container>
  );
};
