import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {COLORS} from '../../colors';
import {Image} from 'react-native';

import { FeedStackNavigator, ExploreStackNavigator, NewStackNavigator, NotificationStackNavigator, ProfileStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

// images.js
const images = {
  feed: {
    uriStandart: require('../icons/tabbar/feed-button-standart.png'),
    uriActive: require('../icons/tabbar/feed-button-active.png')
  },
  explore: {
    uriStandart: require('../icons/tabbar/explore-button-standart.png'),
    uriActive: require('../icons/tabbar/explore-button-active.png'),
  },
  add: {
    uriStandart: require('../icons/tabbar/add-button-standart.png')
  },
  notification: {
    uriStandart: require('../icons/tabbar/notification-button-standart.png'),
    uriActive: require('../icons/tabbar/notification-button-active.png'),
  },
  profile: {
    uriStandart: require('../icons/tabbar/profile-button-standart.png'),
    uriActive: require('../icons/tabbar/profile-button-active.png'),
  }
}

const BottomTabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconPath;
        let image;
        if (route.name === 'Feed') {
          iconPath = focused
          ? image = <Image style={{ width: 20, height: 20 }} source={images.feed.uriActive} />
          : image = <Image style={{ width: 20, height: 20 }} source={images.feed.uriStandart} />;
        } 
        else if(route.name === 'Explore') {
          iconPath = focused
          ? image = <Image style={{ width: 20, height: 20 }} source={images.explore.uriStandart} />
          : image = <Image style={{ width: 20, height: 20 }} source={images.explore.uriActive} />;
        }
        else if(route.name === 'New') {
          image = <Image style={{ width: 50, height: 50, marginBottom: 25 }} source={images.add.uriStandart} />
        }
        else if(route.name === 'Notification') {
          iconPath = focused
          ? image = <Image style={{ width: 20, height: 20 }} source={images.notification.uriActive} />
          : image = <Image style={{ width: 20, height: 20 }} source={images.notification.uriStandart} />;
        }
        else if(route.name === 'Profile') {
          iconPath = focused
          ? image = <Image style={{ width: 20, height: 20 }} source={images.profile.uriActive} />
          : image = <Image style={{ width: 20, height: 20 }} source={images.profile.uriStandart} />;
        }

        // You can return any component that you like here!
        return image;
      },
    })} 
    tabBarOptions={{
      activeTintColor: COLORS.primary,
      inactiveTintColor: COLORS.light,
      iconStyle: { height: 30, width: 30 },
      style: {
          backgroundColor: COLORS.alternative,
          borderTopWidth: 0,
          paddingTop: 3,
          paddingBottom: 3
      }
    }}>
      <Tab.Screen name="Feed" component={FeedStackNavigator} />
      <Tab.Screen name="Explore" component={ExploreStackNavigator} />
      <Tab.Screen name="New" component={NewStackNavigator} />
      <Tab.Screen name="Notification" component={NotificationStackNavigator} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
};

const screenOptionStyle = {
  activeColor: COLORS.primary,
  inactiveColor:"#95a5a6",
  barStyle:{
    style: {
      backgroundColor: "Green" 
    }
     
  }
};


export default BottomTabNavigator;