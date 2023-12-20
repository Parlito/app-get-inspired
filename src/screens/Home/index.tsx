import React, {useState} from 'react'
import { Container, Title } from './styled'
import Button from '../../common/components/Controllers/Button'
import PubliForm from '../../common/components/Forms/PubliForm'
import { ScrollView } from 'react-native-gesture-handler'


function Home() {
  return (
      <ScrollView style={{flex: 1, padding: 5,}}>
      <Button title='Publicar'/>
      <PubliForm/>
      <PubliForm/>
      <PubliForm/>
      <PubliForm/>
      <PubliForm/>
      <PubliForm/>
      </ScrollView>

  )
}

export default Home