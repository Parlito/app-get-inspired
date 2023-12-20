import React, {useState} from 'react'
import { Container, Title } from './styled'
import Button from '../../common/components/Controllers/Button'

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

function Home() {

  const [isLoading, setIsLoading] = useState(false);

  function handleSignOut(){
    auth().signOut().then(() => Alert.alert("Usuário deslogado"));
  }

  return (
    <Container>
        <Title>Home</Title>
    </Container>
  )
}

export default Home