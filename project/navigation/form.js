import React, {useState, useEffect} from 'react';
import HomePageStyle from '../assets/styles/HomePageStyle';
import Page2Style from '../assets/styles/Page2Style';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screens/Splash';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from 'react-native';

import Page2 from '../screens/Page2';
import {
  TouchableWithoutFeedback,
  RotationGestureHandler,
} from 'react-native-gesture-handler';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View>
          <View style={HomePageStyle.style}>
            <View style={HomePageStyle.navigationView}>
              <View>
                <Image
                  source={require('../assets/images/leftAero.png')}
                  style={HomePageStyle.leftaero}
                />
              </View>
              <View>
                <Image
                  source={require('../assets/images/dots.png')}
                  style={HomePageStyle.dots}
                />
              </View>
            </View>
            <View>
              <Text style={HomePageStyle.textprofile}>My Profile</Text>
            </View>
            <View style={HomePageStyle.profile}>
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate('ProfileScreen', {
                    itemID: 1,
                    otherParam: 'Anything you want here!',
                  })
                }>
                <Image
                  source={require('../assets/images/profile.png')}
                  style={HomePageStyle.profileimg}
                />
              </TouchableWithoutFeedback>
              <Text style={HomePageStyle.profiletxt}>Anna Alvarado</Text>
              <Text style={HomePageStyle.subprofiletxt}>
                Guildhal school of Music & Drama
              </Text>
              <Text style={HomePageStyle.subprofiletxt}>London , UK</Text>
            </View>
            <View style={HomePageStyle.countbadgeflex}>
              <View style={HomePageStyle.countphotos}>
                <Text style={HomePageStyle.counttext}>Photos</Text>
                <Text style={HomePageStyle.countsubtext}>456</Text>
              </View>
              <View style={HomePageStyle.countphotos}>
                <Text style={HomePageStyle.counttext}>Followers</Text>
                <Text style={HomePageStyle.countsubtext}>602</Text>
              </View>
              <View style={HomePageStyle.countphotos}>
                <Text style={HomePageStyle.counttext}>Follows</Text>
                <Text style={HomePageStyle.countsubtext}>290</Text>
              </View>
            </View>
          </View>

          <View style={HomePageStyle.gallaryflex}>
            <View style={HomePageStyle.gallery1}>
              <Image
                source={require('../assets/images/gallary1.jpg')}
                style={HomePageStyle.gallaryimg1}
              />
            </View>
            <View style={HomePageStyle.gallery2}>
              <View>
                <Image
                  source={require('../assets/images/gallary2.jpeg')}
                  style={HomePageStyle.gallaryimg2}
                />
              </View>
              <View>
                <Image
                  source={require('../assets/images/gallary3.jpg')}
                  style={{
                    overflow: 'hidden',
                    width: 'auto',
                    height: 150,
                    borderRadius: 30,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function ProfileScreen({route, navigation}) {
  const {itemID} = route.params;
  const {otherParam} = route.params;
  const [update, setUpdate] = useState();
  return (
    <SafeAreaView>
      <ScrollView>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}>
          itemID: {JSON.stringify(itemID)}
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
          }}>
          otherParam: {JSON.stringify(otherParam)}
        </Text>
        <StatusBar barStyle="dark-content" />
        <View style={Page2Style.style}>
          <View style={Page2Style.countbadgeflex}>
            <View style={Page2Style.countphotos}>
              <Text style={Page2Style.counttext}>Hello,</Text>
              <Text style={Page2Style.countsubtext}>Alvarado!</Text>
            </View>
            <View style={Page2Style.countphotos}>
              <Image
                source={require('../assets/images/profile.png')}
                style={Page2Style.profileimg}
              />
            </View>
          </View>
          <View style={Page2Style.searchview}>
            <Image
              source={require('../assets/images/iconsearch1.jpeg')}
              style={Page2Style.iconsearch}
            />
            <TextInput
              placeholder="Search Friends"
              value={update}
              onChange={(event) => setUpdate(event.target.value)}
              style={Page2Style.inputtext}
            />
          </View>
          <View
            style={{
              height: 150,
              marginTop: 50,
              justifyContent: 'space-around',
            }}>
            <ScrollView horizontal={true}>
              <Image
                source={require('../assets/images/addimg.png')}
                style={Page2Style.imgfeed}
              />
              <Image
                source={require('../assets/images/profile.png')}
                style={Page2Style.imgfeed}
              />
              <Image
                source={require('../assets/images/profile.png')}
                style={Page2Style.imgfeed}
              />
              <Image
                source={require('../assets/images/profile.png')}
                style={Page2Style.imgfeed}
              />
            </ScrollView>
          </View>
          <View style={Page2Style.bottomview}>
            <View style={Page2Style.gallaryflex}>
              <View style={Page2Style.gallery1}>
                <Image
                  source={require('../assets/images/gallary2.jpeg')}
                  style={Page2Style.gallaryimg1}
                />
              </View>
            </View>
            <View style={{marginBottom: 20}}>
              <View style={Page2Style.countbadgeflex}>
                <View style={Page2Style.countphotos}>
                  <Image
                    source={require('../assets/images/profile.png')}
                    style={Page2Style.profileimgbottom}
                  />
                </View>
                <View style={Page2Style.countphotos}>
                  <Text style={Page2Style.countsubtext}>Shane Roberstone</Text>
                  <Text style={Page2Style.counttextbottom}>32m ago</Text>
                </View>
                <View>
                  <Image
                    source={require('../assets/images/dots.png')}
                    style={Page2Style.dots}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator mode="card">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
const App = () => {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      {splash ? (
        <Splash />
      ) : (
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: 'black',
            },
            labelStyle: {
              fontSize: 19,
            },
          }}>
          <Tab.Screen name="HomeScreen" component={HomeStack} />
          <Tab.Screen name="ProfileScreen" component={ProfileStack} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
  );
};
export default App;
