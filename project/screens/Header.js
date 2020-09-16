import React from 'react';
import {TouchableOpacity, View, Text, Image} from 'react-native';
import {icons} from '../assets/icons';
import HeaderStyle from '../assets/styles/HeaderStyle';
import {useNavigation} from '@react-navigation/native';
import {useIsDrawerOpen} from '@react-navigation/drawer';

const CustomHeader = (props) => {
  const {title} = props;
  const navigation = useNavigation();
  const isDrawerOpen = useIsDrawerOpen();
  return (
    <View style={HeaderStyle.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image style={HeaderStyle.menu} source={icons.menu} />
      </TouchableOpacity>

      <View>
        <Text style={HeaderStyle.title}>{title}</Text>
      </View>
    </View>
  );
};

export default CustomHeader;
