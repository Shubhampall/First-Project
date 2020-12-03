import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {LoginBack, Logo, Mark} from '../../constant/images';
import HeaderComponent from '../Layout/Header';
import {styles} from './style';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={LoginBack} style={styles.image}>
        <View
          style={{
            backgroundColor: 'transparent',
            width: '100%',
            height: '10%',
          }}>
          <HeaderComponent name="Profile" navigation={navigation} />
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: 'red',
            paddingTop: 40,
            marginTop: 0,
            alignItems: 'center',
          }}>
          <ScrollView
            style={{
              width: '90%',
              backgroundColor: 'yellow',
            }}>
            <Image source={Mark} style={styles.profile} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
