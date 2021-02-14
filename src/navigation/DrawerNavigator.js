import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { ListsStackNavigator } from "./StackNavigator";
import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={TabNavigator} />
      <Drawer.Screen name="Lists" component={ListsStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;