import React, {useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Page2Style from '../assets/styles/Page2Style';
import {
  AsyncStorage,
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../screens/Header';

const ProfileScreen = ({route, navigation}) => {
  const [image, setImage] = useState('');

  const pickImage = () => {
    console.log('a');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };
  const [update, setUpdate] = useState();
  return (
    <SafeAreaView>
      <Header title="Profile" />
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <View style={Page2Style.style}>
          <View style={Page2Style.countbadgeflex}>
            <View style={Page2Style.countphotos}>
              <Text style={Page2Style.counttext}>Hello,</Text>
              <Text style={Page2Style.countsubtext}>Alvarado!</Text>
            </View>
            <View style={Page2Style.countphotos}>
              <TouchableOpacity onPress={() => pickImage()}>
                <Image
                  // {image != ''}
                  // source={{ uri: image}}
                  source={require('../assets/images/profile.png')}
                  style={Page2Style.profileimg}
                />
              </TouchableOpacity>
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
};

export default ProfileScreen;
