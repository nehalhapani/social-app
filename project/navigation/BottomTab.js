import * as React from 'react';
import {Text, View, Button, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomePage';
import FlatList from '../flat-list/flat-list';
import {icons} from '../icons';
import StackNavigation from './stack-navigation';
import ProfileScreen from '../screens/Page2';

const Tab = createBottomTabNavigator();
const tabItem = (screen, stack, source) => {
  return (
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => tabIcon(focused, source),
        unmountOnBlur: true,
      }}
      name={screen}
      component={stack}
    />
  );
};
function tabIcon(focused, source) {
  return (
    <View style={[TAB_VIEW, focused && {borderTopWidth: 1.5}]}>
      <Image style={focused ? TAB_ICON : INACTIVE_TAB_ICON} source={source} />
    </View>
  );
}
const TAB_ICON = {
  height: 25,
  width: 25,
  tintColor: 'red',
};
const INACTIVE_TAB_ICON = {
  ...TAB_ICON,
  tintColor: 'black',
};
const TAB_VIEW = {
  borderTopColor: 'red',
  borderTopWidth: 0,
  minWidth: '100%',
  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  height: 35,
};
export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: '#0000ff',
            borderTopColor: 'gray',
            borderTopWidth: 1,
          },
          labelStyle: {
            fontSize: 12,
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#999999',
          // activeBackgroundColor: '#0000ff',
          // inactiveBackgroundColor: '#0d6e69'
        }}>
        {tabItem('Home', HomeScreen, icons.home)}
        {tabItem('Profile', ProfileScreen, icons.profile)}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
