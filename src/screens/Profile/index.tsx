import React, { useState } from 'react'
import { Container, InfoContainer, InfoText, Title } from './styled'
import Button from '../../common/components/Controllers/Button'
import { useNavigation } from '@react-navigation/native'
import FooterButton from '../../common/components/Controllers/FooterButton';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import { Image } from 'react-native';

function Profile() {

  const usuario = auth().currentUser;

  const navigation = useNavigation();

  return (
    <Container>
        <Image 
               source={{uri:'https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0',}}
               style={{marginTop:20, marginHorizontal: 90, width: 200, height: 200}}/>
        <InfoContainer>
          <InfoText>Nome: {usuario.displayName}</InfoText>
          <InfoText>E-mail: {usuario.email}</InfoText>
          <InfoText>---------------------------------------</InfoText>
          <InfoText>Publicações:</InfoText>
        </InfoContainer>
    </Container>
  )
}

export default Profile