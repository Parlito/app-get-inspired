import React from 'react';

import auth from '@react-native-firebase/auth';

import { LogoutButton } from '../../Controllers/LogoutButton';
import { Container, Greeting, Title, SubTitle } from './styled';
import { Alert } from 'react-native';

export function Header() {
  function handleSignOut() { auth().signOut().then(() => Alert.alert("deslogado")).catch((error) => console.log(error))}

  return (
    <Container>
      <Greeting>
        <Title>HelpDesk</Title>
        <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
      </Greeting>

      <LogoutButton onPress={handleSignOut} />
    </Container>
  );
}