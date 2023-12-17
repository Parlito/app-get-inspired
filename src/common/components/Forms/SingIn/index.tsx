import React,{useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { Footer, Form, Title } from './styled'
import Input from '../../Controllers/Input'
import Button from '../../Controllers/Button'
import FooterButton from '../../Controllers/FooterButton'

function SignIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  function handleSignIn() {
    setIsLoading(true);
  }

  function handleForgotPassword() {

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