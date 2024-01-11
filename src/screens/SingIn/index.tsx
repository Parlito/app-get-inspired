import React, { useState } from 'react'
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';

import SignIn from '../../common/components/Forms/SingIn';

import { BackButton, BackText, Container, Content, Footer, SubTitle } from './styled';
import FooterButton from '../../common/components/Controllers/FooterButton';
import AccountForm from '../../common/components/Forms/AccountForm';
import auth from '@react-native-firebase/auth';
import { MaterialIcons } from '@expo/vector-icons';

function SignInS() {

  const [create, setCreate] = useState(false);
  const [email, setEmail] = useState('');
  

  function handleNewAccount() {
    setCreate(!create);
  }

  function handleBack(){
    setCreate(!create);
  }
  return (
    <Container>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Content>
          <SubTitle>Conte conosco, estamos aqui para ajudar.</SubTitle>
          {create ? <AccountForm/> : <SignIn />} 
          {create ? null : <Footer>
          <FooterButton title='Criar conta' icon="person-add" onPress={handleNewAccount}/>
          </Footer>}
          {create ? <BackButton onPress={handleBack}>
            <MaterialIcons name="arrow-back" size={24} color={"#318ce7"} />
            <BackText>Eu já tenho uma conta</BackText>
          </BackButton> : null}
        </Content>
      </KeyboardAvoidingView>
    </Container>
   
  )
}

export default SignInS