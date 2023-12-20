import React from 'react'
import { View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer'
import Button from '../../Controllers/Button'
import { LogoutButton } from '../../Controllers/LogoutButton'
import FooterButton from '../../Controllers/FooterButton'

const CustomDrawer = props => {
  return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        <View style={{padding:20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            <FooterButton title='Sair da conta' icon="logout"/>
        </View>
        </View>
  )
}

export default CustomDrawer