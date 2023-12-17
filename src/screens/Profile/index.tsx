import React, { useState } from 'react'
import { Container, Title } from './styled'
import Button from '../../common/components/Controllers/Button'
import { Alert } from 'react-native';


function Profile() {

  const [isLoading, setIsLoading] = useState();

  function handleNewAccount() {
    Alert.alert("Olá");
  }

  return (
    <Container>
        <Title>
            Perfil
        </Title>
        <Button title='Cadastrar' isLoading={isLoading} onPress={handleNewAccount}/>
    </Container>
  )
}

export default Profile