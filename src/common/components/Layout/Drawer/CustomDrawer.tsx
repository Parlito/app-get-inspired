import React, { useEffect, useState } from 'react'
import { Alert, ImageBackground, View, Image, Text } from 'react-native'
import { DrawerContentScrollView, DrawerItemList  } from '@react-navigation/drawer'
import Button from '../../Controllers/Button'
import { LogoutButton } from '../../Controllers/LogoutButton'
import FooterButton from '../../Controllers/FooterButton'

import { useNavigation } from '@react-navigation/native'

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';



const CustomDrawer = props => {

    const navigation = useNavigation();

    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    const usuario = auth().currentUser;

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
        <DrawerContentScrollView 
        {...props}
        contentContainerStyle={{backgroundColor: '#39cff2'}}
        >
        <ImageBackground 
        source={{uri:'https://i.pinimg.com/736x/9b/b2/f9/9bb2f90b3cf1595681c6ac21a536d221.jpg',}}
        style={{padding:20}}>
            <Image 
               source={{uri:'https://th.bing.com/th/id/R.19fa7497013a87bd77f7adb96beaf768?rik=144XvMigWWj2bw&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f5%2fUser-Profile-PNG-High-Quality-Image.png&ehk=%2bat%2brmqQuJrWL609bAlrUPYgzj%2b%2f7L1ErXRTN6ZyxR0%3d&risl=&pid=ImgRaw&r=0',}}
               style={{height:80, width: 80, borderRadius:40, marginBottom:10}}/>
            {user ? <Text style={{color:'#318ce7', fontSize: 18, marginBottom:5, fontWeight:'bold', marginStart:10}}>{usuario.displayName}</Text> : null}
        </ImageBackground>
        <View style={{flex:1,backgroundColor:'white',paddingTop:20}}>   
        <DrawerItemList {...props}/>  
        </View>
        </DrawerContentScrollView>
        
        {user ? <View style={{padding:20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
            
            <FooterButton title='Sair da conta' icon="logout" onPress={handleLogOut}/> 
            
        </View> : null}
        </View>
  )
}

export default CustomDrawer