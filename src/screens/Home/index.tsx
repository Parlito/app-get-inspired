import React, {useEffect, useState} from 'react'
import Button from '../../common/components/Controllers/Button'
import { PubliForm } from '../../common/components/Forms/PubliForm'
import { ScrollView, FlatList } from 'react-native';
import { Container, Title } from './styled';
import { NewPost } from '../../common/components/Controllers/NewPost';

function Home() {

  return (
   <Container>
    <Title>Home</Title>
    <NewPost/>
   </Container>
  );
}

export default Home