import React, { useState } from 'react'
import { Container, Title } from './styled'
import Button from '../../common/components/Controllers/Button'
import { Alert } from 'react-native';
import Input from '../../common/components/Controllers/Input';


function Profile() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleNewAccount() {
    Alert.alert("Olá");
  }

  return (
    <Container>
        <Title>
            Perfil
        </Title>
        <Input/>
        <Button title='Cadastrar' isLoading={isLoading} onPress={handleNewAccount}/>
    </Container>
  )
}

export default Profile