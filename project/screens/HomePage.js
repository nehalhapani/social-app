import React from 'react';
import HomePageStyle from '../assets/styles/HomePageStyle';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StatusBar,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../screens/Header';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Header title="Home" />
      <ScrollView>
        <StatusBar barStyle="dark-content" />

        <View style={{marginBottom: 100}}>
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
                onPress={() => navigation.navigate('Profile')}

                // navigation.navigate('ProfileScreen', {
                //   itemID: 1,
                //   otherParam: 'Anything you want here!',
                // })
              >
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
};

export default HomeScreen;
