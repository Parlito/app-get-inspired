import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native';

import SingIn from '../../common/components/Forms/SingIn';

import { Container, Content, SubTitle } from './styled';

function SingInS() {
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <SingIn/>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default SingIn