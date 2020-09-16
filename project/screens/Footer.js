import * as React from 'react';
import {Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {icons} from '../assets/icons';
import HeaderStyle from '../assets/styles/HeaderStyle';

function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#e91e63"
      labelStyle={{fontSize: 12}}
      style={{backgroundColor: 'tomato', height: 200}}
      //   style={{backgroundColor: 'green'}}
      tabBarOptions={{
        style: {
          backgroundColor: 'teal',
        },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Image style={HeaderStyle.menu} source={icons.home} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <Image style={HeaderStyle.img} source={icons.profile} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Footer() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
