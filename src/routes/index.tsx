import { NavigationContainer } from "@react-navigation/native";
import DrawerNav from "./DrawerNav";

import React from 'react'

function Routes() {
  return (
    <NavigationContainer>
        <DrawerNav/>
    </NavigationContainer>
  )
}

export default Routes