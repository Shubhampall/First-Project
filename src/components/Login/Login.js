import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

import {styles} from './Style';
import {LoginBack} from '../../constant/images';
import Inputcomponent from '../Layout/Input';
import ButtonComponent from '../Layout/Button';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={LoginBack} style={styles.image}>
      <View style={styles.demo}>
        <View style={styles.signuppage}>
          <Text style={styles.Textcolor} size={12}>
            Login with
          </Text>
          <View style={styles.Icon}>
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                backgroundColor="#FFFFFF"
                // eslint-disable-next-line no-alert
                onPress={() => alert('Login with Githu')}>
                <Icon name="github" size={30} />
                <Text style={styles.IconButton}>Github</Text>
              </Icon.Button>
            </View>
            <Text style={styles.marginLeft20} />
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                backgroundColor="#FFFFFF"
                // eslint-disable-next-line no-alert
                onPress={() => alert('Login with Githu')}>
                <Icon name="google" size={34} style={styles.marginLeft} />
                <Text style={styles.IconButton}>Google</Text>
              </Icon.Button>
            </View>
          </View>
        </View>
        <Text style={styles.Top20} size={12}>
          Login with classic way
        </Text>
        <View style={styles.searchSection}>
          <Icons name="email" size={20} style={styles.padding5} />
          <Inputcomponent placeholder="Enter Your Email" style={styles.input} />
        </View>
        <View style={styles.searchSection1}>
          <Icons name="onepassword" size={20} style={styles.padding5} />
          <Inputcomponent
            placeholder="Enter Your Password"
            show={true}
            style={styles.input}
          />
        </View>
        <View style={styles.checkbox}>
          <CheckBox borderColor="#663399" style={styles.check} />
          <Text style={styles.Top3}>Keep Me Remember</Text>
        </View>
        <View style={styles.buttonComponent}>
          <ButtonComponent title="Login" navigation={navigation} page="Main" />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
