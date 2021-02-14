// ./navigation/StackNavigator.js

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Feed from "../screens/Feed";
import Explore from "../screens/Explore";
import New from "../screens/New";
import Notification from "../screens/Notification";
import Profile from "../screens/Profile";
import Lists from "../screens/Lists";
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

const FeedStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Feed} />
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
      <Stack.Screen name="New" component={New} />
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
      <Stack.Screen name="Profile" component={Profile} />
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

export { FeedStackNavigator, ExploreStackNavigator, NewStackNavigator, NotificationStackNavigator, ProfileStackNavigator, ListsStackNavigator};