import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native';

import SignIn from '../../common/components/Forms/SingIn';

import { Container, Content, SubTitle } from './styled';

function SignInS() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <SignIn/>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default SignInS