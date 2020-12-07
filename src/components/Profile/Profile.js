import React from 'react';
import {Button, Image, ImageBackground, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {LoginBack, Mark} from '../../constant/images';
import HeaderComponent from '../Layout/Header';
import {styles} from './style';

const Profile = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={LoginBack} style={styles.image}>
        <View style={styles.Header}>
          <HeaderComponent name="Profile" />
        </View>
        <View style={styles.FirstView}>
          <View style={{flex: 1}}>
            <ScrollView style={styles.ScrollView}>
              <View style={styles.Upper}>
                <View style={styles.SecondUpper}>
                  <Image source={Mark} style={styles.ImageContainer} />
                </View>
                <View style={styles.ButtonContainer}>
                  <View style={styles.margon60}>
                    <Button title="Connect" />
                  </View>
                  <View style={styles.margin40}>
                    <Button title="Message" color="black" />
                  </View>
                </View>
                <View style={styles.styleContainer}>
                  <View style={styles.Frind}>
                    <Text style={styles.Font30}>2K</Text>
                    <Text style={styles.Font15}>Friend</Text>
                  </View>
                  <View style={styles.Frind}>
                    <Text style={styles.Font30}>10</Text>
                    <Text style={styles.Font15}>Photos</Text>
                  </View>
                  <View style={styles.Frind}>
                    <Text style={styles.Font30}>89</Text>
                    <Text style={styles.Font15}>Comments</Text>
                  </View>
                </View>
                <View style={styles.content}>
                  <View style={styles.contentUpper}>
                    <Text style={styles.Name}>Mark Zuckerberg, 27</Text>
                    <Text style={styles.TextFont}>San Francisco, USA</Text>
                  </View>
                </View>
                <View style={styles.aboutUpper}>
                  <View style={styles.about}>
                    <Text style={styles.aboutText}>
                      Mark Elliot Zuckerberg is an American media magnate,
                      internet entrepreneur, and philanthropist. He is known for
                      co-founding Facebook, Inc.
                    </Text>
                  </View>
                  <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Show more</Text>
                  </View>
                </View>
              </View>
              <View style={styles.Lower}>
                <View style={styles.ItemContainer}></View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
