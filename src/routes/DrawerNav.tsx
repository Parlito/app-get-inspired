import { createDrawerNavigator } from "@react-navigation/drawer";
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";
import Donations from "../screens/Donations";
import SignInS from "../screens/SingIn";
import Register from "../screens/Register";

const {Screen, Navigator} = createDrawerNavigator();



function DrawerNav() {
  return (
    <Navigator >
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
        <Screen name="profile"
        component={Profile}
        options={{
            drawerLabel: 'Perfil',
            drawerIcon: config => <FontAwesome name="user" size={30} color="#318ce7" />,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '6%'},
            drawerLabelStyle: {marginLeft: '9%',fontSize: 20,},
        }}
        />
        <Screen name="donations"
        component={Donations}
        options={{
            drawerLabel: 'Ajude o App!',
            drawerIcon: config => <FontAwesome name="star" size={30} color="#318ce7" />,
            headerTitle: '',
            drawerItemStyle: {marginLeft: '5%'},
            drawerLabelStyle: {marginLeft: '5%', fontSize: 20}          
        }}
        />
        <Screen name="signIn"
        component={SignInS}
        options={{
            drawerLabel: 'aaaaaaaa',  
        }}
        />
        <Screen name="register"
        component={Register}
        options={{
            drawerLabel: 'bbbbbbbbbb',  
        }}
        />
    </Navigator>
  )
}

export default DrawerNav