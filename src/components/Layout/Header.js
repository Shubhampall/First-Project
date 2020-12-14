import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Bell from 'react-native-vector-icons/FontAwesome';
import Basket from 'react-native-vector-icons/MaterialIcons';
import Back from 'react-native-vector-icons/Ionicons';
import Home from '../Home/index';
import styles from './Style';

const CheckIcon = ({name, navigation}) => {
  if (name === 'Home') {
    return (
      <Icon.Button
        size={40}
        backgroundColor="#FFFFFF"
        style={styles.Top8}
        onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={30} />
      </Icon.Button>
    );
  } else {
    return (
      <Icon.Button
        size={40}
        backgroundColor="#FFFFFF"
        style={styles.Top8}
        onPress={() => navigation.navigate(Home)}>
        <Back name="arrow-back" size={30} />
      </Icon.Button>
    );
  }
};
const HeaderComponent = ({name, navigation}) => {
  return (
    <View style={styles.Header}>
      <CheckIcon name={name} navigation={navigation} />
      <Text style={styles.text}>{name}</Text>
      <View style={styles.HeaderView}>
        <Icon.Button style={styles.button} backgroundColor="#FFFFFF">
          <Bell name="bell" size={20} />
        </Icon.Button>
        <Icon.Button style={styles.button} backgroundColor="#FFFFFF">
          <Basket name="shopping-basket" size={25} />
        </Icon.Button>
      </View>
    </View>
  );
};

export default HeaderComponent;
