import React from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

import AccountForm from '../../common/components/Forms/AccountForm';

import { Container, Content, SubTitle, BackButton, BackText } from './styled';

function Register() {

    const navigation = useNavigation();

  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          

          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          <AccountForm />

          <BackButton onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color={"#318ce7"} />
            <BackText>Eu já tenho uma conta</BackText>
          </BackButton>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  )
}

export default Register