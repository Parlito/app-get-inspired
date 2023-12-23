import React, { useEffect, useState } from 'react'
import { Container, NormalText, Title, User } from './styled'
import Input from '../../Controllers/Input';
import Button from '../../Controllers/Button';
import { TextArea } from '../../Controllers/TextArea';

import firebase from '@react-native-firebase/app';
import firestore from "@react-native-firebase/firestore"
import auth from '@react-native-firebase/auth';

import { Alert } from 'react-native';

export const PubliForm = () => {

  const [user, setUser] = useState(null);
  const [titulo, setTitulo] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const usuario = auth().currentUser;

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((authUser) => {
      setUser(authUser);
    });

    return unsubscribe;
  }, []);

  function handleNewPubli() {
    if (!user) {
      Alert.alert("Acesso Negado", "Você precisa estar logado para publicar.");
      return;
    }

    setIsLoading(true);

    firestore()
    .collection('posts')
    .add({
      userId: user.uid,
      name: usuario.displayName,
      titulo,
      description,
      created_at: firestore.FieldValue.serverTimestamp()
    })
    .then(() => Alert.alert("Publicação", "publicação feita com sucesso!"))
    .catch((error) => console.log(error))
    .finally(() => setIsLoading(false));
  }

  return (
    
    <Container>
      <Title>Nova publicação</Title>
      <Input placeholder='Título da publicação' onChangeText={setTitulo}/>
      <TextArea placeholder='Sua história' onChangeText={setDescription}/>

      <Button title='Publicar!' isLoading={isLoading} onPress={handleNewPubli}/>
    </Container>
  );
};
