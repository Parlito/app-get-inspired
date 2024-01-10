import React, {useEffect, useState} from 'react'
import Button from '../../common/components/Controllers/Button'
import { PubliForm } from '../../common/components/Forms/PubliForm'
import { ScrollView, FlatList, KeyboardAvoidingView } from 'react-native';
import { Container, } from './styled';
import { NewPost } from '../../common/components/Controllers/NewPost';
import { Posts } from '../../common/components/Lists/Posts';

function Home() {

  return (
    <>
    <ScrollView
        style={{
          flex: 1,
          paddingTop: 40,
          backgroundColor: 'white',
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 100,
        }}
        nestedScrollEnabled
      >
        <ScrollView
          contentContainerStyle={{
            width: '100%',
          }}
          horizontal
          scrollEnabled={false}
        >
  <Posts/>
  </ScrollView>
  </ScrollView>
  <NewPost/>
  </>
  );
}

export default Home