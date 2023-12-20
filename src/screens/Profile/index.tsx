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
    </Container>
  )
}

export default Profile