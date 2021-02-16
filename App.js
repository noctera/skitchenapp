import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from 'react-redux';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import {AuthStackNavigator} from './src/navigation/StackNavigator';
import store from './src/redux/Store/index';

const App = () => {

  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  if (!isLoggedIn) {
    return(
      <NavigationContainer>
        <AuthStackNavigator />
      </NavigationContainer>
    )
  }
  else {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
  
}
export default App;

