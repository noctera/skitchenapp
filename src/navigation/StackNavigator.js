// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Image} from "react-native";

import Feed from "../screens/Feed";
import Explore from "../screens/Explore";
import New from "../screens/New";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
import Login from "../screens/Login";
import Register from "../screens/Register";
import { COLORS } from "../../colors";



const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: COLORS.alternative,
    height: 50
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


function LogoTitle({navigation}) {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require('../icons/tabbar/menu-button-standart.png')}
      onAccessibilityTap={() => navigation.openDrawer()}
    />
  );
}



const AuthStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}

const FeedStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Feed} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Explore" component={Explore} />
    </Stack.Navigator>
  );
}

const NewStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="New" component={New} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

const NotificationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
}

const ProfileStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false}}/>
    </Stack.Navigator>
  );
}

const ListsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Lists" component={Lists} />
    </Stack.Navigator>
  );
}

export { AuthStackNavigator, FeedStackNavigator, ExploreStackNavigator, NewStackNavigator, NotificationStackNavigator, ProfileStackNavigator, ListsStackNavigator};