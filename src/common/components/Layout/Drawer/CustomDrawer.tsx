import React, { useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer'
import Button from '../../Controllers/Button'
import { LogoutButton } from '../../Controllers/LogoutButton'
import FooterButton from '../../Controllers/FooterButton'

import { useNavigation } from '@react-navigation/native'

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';



const CustomDrawer = props => {

    const navigation = useNavigation();

    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);
        return subscriber;
    }, []);

    function handleLogOut(){
        auth().signOut().then(() => Alert.alert("Você saiu da conta com sucesso")).catch(error => console.log(error))
    }

    function handleLogin(){
        navigation.navigate('signIn')
    }

  return (
        <View style={{flex: 1}}>
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
        </DrawerContentScrollView>
        {user ? <View style={{padding:20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            
            <FooterButton title='Sair da conta' icon="logout" onPress={handleLogOut}/> 
            
        </View> : null}
        </View>
  )
}

export default CustomDrawer