import React, {useState} from 'react';
import {View, SafeAreaView, Text, Image} from 'react-native';

const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          justifyContent: 'center',
          marginTop: 330,
        }}>
        <Image
          style={{
            height: 100,
            width: 100,
            alignSelf: 'center',
          }}
          source={require('../assets/images/gallary2.jpeg')}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 10,
          }}>
          Welcome To My Profile.!
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default SplashScreen;
