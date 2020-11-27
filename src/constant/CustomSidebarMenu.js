import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';

import {Logo} from './images';

const CustomSidebarMenu = (props) => {
  return (
    <View style={styles.f1}>
      <View style={styles.flexdirection}>
        <Image source={Logo} style={styles.sideMenuProfileIcon} />
        <Icon name="menu" size={40} style={styles.Icon} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text style={styles.Text}>www.Gemsessence.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  f1: {flex: 1},
  flexdirection: {flexDirection: 'row'},
  Icon: {marginLeft: 130, marginTop: 30},
  Text: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default CustomSidebarMenu;
