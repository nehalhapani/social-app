import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from '../screens/HomePage';
import ProfileScreen from '../screens/Page2';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TabActions} from '@react-navigation/native';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const MainTabScreen = () => {
  <Tab.navigator initialRouteName="HomeStackScreen">
    <Tab.Screen name="HomeScreen" component={HomeStackScreen} />
    <Tab.Screen name="ProfileScreen" component={ProfileStackScreen} />
  </Tab.navigator>;
};
export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
  </HomeStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator>
    <DetailsStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
