import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Iconsuser from 'react-native-vector-icons/FontAwesome';
import CheckBox from '@react-native-community/checkbox';

import {LoginBack} from '../../constant/images';
import Inputcomponent from '../Layout/Input';
import ButtonComponent from '../Layout/Button';
import styles from './style';

const Registration = () => {
  return (
    <ImageBackground source={LoginBack} style={styles.image}>
      <View style={styles.demo}>
        <View style={styles.signuppage}>
          <View>
            <Text style={styles.Textcolor} size={12}>
              Sign up with
            </Text>
          </View>
          <View style={styles.row}>
            <Icon.Button
              style={styles.button}
              name="github"
              backgroundColor="#FFFFFF"
              // eslint-disable-next-line no-alert
              onPress={() => alert('Login with Githu')}>
              <Icon name="github" size={30} />
              <Text style={styles.IconText}>Github</Text>
            </Icon.Button>
            <Text style={styles.margin20} />
            <Icon.Button
              style={styles.button}
              backgroundColor="#FFFFFF"
              // eslint-disable-next-line no-alert
              onPress={() => alert('Login with Githu')}>
              <Icon name="google" size={34} style={styles.margin10} />
              <Text style={styles.IconText}>Google</Text>
            </Icon.Button>
          </View>
        </View>
        <Text style={styles.Textsing} size={12}>
          or sign with classic way
        </Text>
        <View style={styles.searchSection}>
          <Iconsuser name="user" size={20} style={styles.padding5} />
          <Inputcomponent placeholder="Enter Your Name" style={styles.input} />
        </View>
        <View style={styles.searchSection1}>
          <Icons name="email" size={20} style={styles.padding5} />
          <Inputcomponent placeholder="Enter Your Email" style={styles.input} />
        </View>
        <View style={styles.searchSection1}>
          <Icons name="onepassword" size={20} style={styles.padding5} />
          <Inputcomponent
            placeholder="Enter Your PassWord"
            show={true}
            style={styles.input}
          />
        </View>
        <View style={styles.checkbox}>
          <CheckBox borderColor="#663399" style={styles.checkBox} />
          <Text style={styles.Top3}>i agree with the </Text>
          <Text style={styles.colorTop}>Privcy Policy</Text>
        </View>
        <View style={styles.Buttocomponet}>
          <ButtonComponent title="Sign out " />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Registration;
