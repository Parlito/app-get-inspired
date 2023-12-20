import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Footer, Form, Title } from './styled'
import Input from '../../Controllers/Input'
import Button from '../../Controllers/Button'
import FooterButton from '../../Controllers/FooterButton'

import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native'

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {Alert.alert("Usuário logado com sucesso!"); })
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false))
  }

  function handleForgotPassword() {
    auth()
    .sendPasswordResetEmail(email)
    .then(() => Alert.alert("Redefinir senha", "Enviamos um e-mail para você"))
    .catch(error => console.log(error));
  }
  
return (
    <Form>
        <Title>Entrar</Title>
        <Input placeholder='E-mail' onChangeText={setEmail}/>
        <Input placeholder='Senha' secureTextEntry onChangeText={setPassword}/>
        <Button title='Entrar' onPress={handleSignIn} isLoading={isLoading}/>
        
        <Footer>
            <FooterButton title='Criar conta' icon="person-add" onPress={() => navigation.navigate('register')}/>
            <FooterButton title='Esqueci a minha senha' icon="email" onPress={handleForgotPassword}/>
        </Footer>
    </Form>
  )
}

export default SignIn