import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import firestore from "@react-native-firebase/firestore";

import { Post, PostProps } from '../../Controllers/Post';
import { Container, Header, Title, Counter } from './styled';
import { Load } from '../../Animations/Load';

export function Posts(){
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState<PostProps[]>([]);

  useEffect(() => {
    setIsLoading(true);

    const subscribe = firestore()
    .collection('posts')
    .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map(doc => {
            return{
                id: doc.id,
                ...doc.data()
            }
        }) as PostProps[];

        setOrders(data);
        setIsLoading(false);
    });

    return () => subscribe();
  }, []);

  

  return(
    <Container>
    { isLoading ? <Load/> :
          <FlatList
            data={orders}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Post data={item} />}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
    }

    </Container>
    
  );
}