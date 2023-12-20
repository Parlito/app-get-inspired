import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

import React, { useEffect, useState } from 'react'

import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Home from "../screens/Home";

function Routes() {

  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
        {user ? <Home /> : <DrawerNav/>}
    </NavigationContainer>
  )
}

export default Routes