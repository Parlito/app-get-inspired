import React, {useState} from 'react'
import { Form, Title } from './styled'
import Input from '../../Controllers/Input'
import Button from '../../Controllers/Button'

function AccountForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    function handleNewAccount() {

    }
  

    return (
    <Form>
        <Title>Cadastrar</Title>
        <Input placeholder="E-mail" onChangeText={setEmail} />
        <Input placeholder="Senha" secureTextEntry onChangeText={setPassword}/>
        <Button title="Cadastrar" isLoading={isLoading} onPress={handleNewAccount}/>
    </Form>
  )
}

export default AccountForm