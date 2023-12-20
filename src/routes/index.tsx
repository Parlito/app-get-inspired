import { NavigationContainer, useNavigation } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

import React, { useEffect, useState } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Home from "../screens/Home";


function Routes() {
  return (
    <GestureHandlerRootView style={{ padding: 10, flex: 1 }}>
    <NavigationContainer>
        <DrawerNav />
    </NavigationContainer>
    </GestureHandlerRootView>
  )
}
export default Routes