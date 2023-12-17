import React, { useState } from 'react'
import { Container, Title } from './styled'
import Button from '../../common/components/Controllers/Button'
import { useNavigation } from '@react-navigation/native'
import FooterButton from '../../common/components/Controllers/FooterButton';



function Profile() {

  const navigation = useNavigation();

  return (
    <Container>
        <Title>
            Perfil
        </Title>
        <FooterButton title='Login' icon="person-add" onPress={() => navigation.navigate('signIn')}/>
        <Button title='Login' onPress={() => navigation.navigate('signIn')}/>
    </Container>
  )
}

export default Profile