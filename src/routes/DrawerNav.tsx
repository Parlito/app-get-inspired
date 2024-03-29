import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import SignInS from "../screens/SingIn";
import CustomDrawer from "../common/components/Layout/Drawer/CustomDrawer";

const {Screen, Navigator} = createDrawerNavigator();

function DrawerNav() {

    const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(setUser);
        return subscriber;
    }, []);

  return (
    <Navigator drawerContent={props => <CustomDrawer {...props}/>} >
        <Screen name='home'
        component={Home}  
        options={{
            drawerLabel: 'Home',
            drawerIcon: config => <FontAwesome name="home" size={30} color="#318ce7" />,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '5%'},
            drawerLabelStyle: {marginLeft: '5%', fontSize: 20}
        }}/>
        <Screen name="favorites"
        component={Favorites}
        options={{
            drawerLabel: 'Favoritos',
            drawerIcon: config => <FontAwesome name="heart" size={30} color="#318ce7"/>,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '5%'},
            drawerLabelStyle: {marginLeft: '5%', fontSize: 20},
        }}
        />
        {user ? <Screen name="profile"
        component={Profile}
        options={{
            drawerLabel: 'Perfil',
            drawerIcon: config => <FontAwesome name="user" size={30} color="#318ce7" />,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '6%'},
            drawerLabelStyle: {marginLeft: '9%',fontSize: 20,},
        }}
        /> : <Screen name="signIn"
        component={SignInS}
        options={{
            drawerLabel: 'Entrar',
            drawerIcon: config => <FontAwesome name="user" size={30} color="#318ce7" />,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '6%'},
            drawerLabelStyle: {marginLeft: '9%',fontSize: 20,}, 
        }}
        /> }
    </Navigator>
    
  )
}

export default DrawerNav