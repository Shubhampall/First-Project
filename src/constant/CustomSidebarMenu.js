import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {Logo} from "./images"
import  Icon  from 'react-native-vector-icons/Entypo'
const CustomSidebarMenu = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection:'row'}}>
      <Image
        source={Logo}
        style={styles.sideMenuProfileIcon}
      />
      <Icon name="menu" size={40} style={{marginLeft:130,marginTop:30}} />
      </View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          color: 'grey'
        }}>
        www.Gemsessence.com
      </Text>
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
});

export default CustomSidebarMenu;