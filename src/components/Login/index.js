import React, {useState} from 'react';
import {View, Text, ImageBackground, Linking, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';
import {useSelector} from 'react-redux';

import {styles} from './Style';
import {LoginBack} from '../../constant/images';
import Inputcomponent from '../commonComponent/Input';
import ButtonComponent from '../commonComponent/Button';
import Registration from '../Registration/index';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Login = ({navigation, addToEmailHandler, addToPasswordHandler}) => {
  const state = useSelector((state) => state.Login);

  const Registrationstate = useSelector((state) => state.Registration);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <ImageBackground source={LoginBack} style={styles.image}>
      <View style={styles.demo} backgroundColor="#FFFAFA">
        <View style={styles.signuppage}>
          <Text style={styles.Textcolor} size={12}>
            Login with
          </Text>
          <View style={styles.Icon}>
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                backgroundColor="#FFFFFF"
                onPress={() => Linking.openURL('https://github.com/')}>
                <Icon name="github" size={30} />
                <Text style={styles.IconButton}>Github</Text>
              </Icon.Button>
            </View>
            <Text style={styles.marginLeft20} />
            <View style={styles.ViewStyle}>
              <Icon.Button
                style={styles.button}
                backgroundColor="#FFFFFF"
                onPress={() => Linking.openURL('https://gmail.com/')}>
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
          <View style={styles.ViewIcon}>
            <Icons name="email" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Email"
              keybordtype="email"
              handle={(text) => {
                addToEmailHandler(text);
              }}
            />
          </View>
        </View>
        <View style={styles.searchSection1}>
          <View style={styles.ViewIcon}>
            <Icons name="onepassword" size={20} style={styles.padding5} />
          </View>
          <View style={styles.ViewInput}>
            <Inputcomponent
              placeholder="Enter Your Password"
              show={true}
              handle={(text) => {
                addToPasswordHandler(text);
              }}
            />
          </View>
        </View>
        <View style={styles.checkbox}>
          <CheckBox
            borderColor="#663399"
            style={styles.check}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.Top3}>Keep Me Remember</Text>
        </View>
        <TouchableOpacity
          style={styles.Top30}
          onPress={() => navigation.navigate('Registration')}>
        <Text> Registration</Text>
        </TouchableOpacity>
        <View style={styles.buttonComponent}>
          <ButtonComponent
            title="Login"
            navigation={navigation}
            page="Main"
            handler={() => {
              if (
                state.loginData.email === Registrationstate.userData.email &&
                state.loginData.password === Registrationstate.userData.password
              ) {
                navigation.navigate('Main');
              } else {
                Alert.alert('Invalid Email and Password');
              }
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Login;
