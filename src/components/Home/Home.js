import React, {useState, useEffect} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/EvilIcons';
import Diamond from 'react-native-vector-icons/MaterialCommunityIcons';
import Fashion from 'react-native-vector-icons/Fontisto';

import HeaderComponent from '../Layout/Header';
import Inputcomponent from '../Layout/Input';
import {ice} from '../../constant/images';
import Card from '../Layout/Card';
import {url} from '../../constant/url';
import styles from './Style';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`${url}posts`)
      .then((response) => response.json())
      .then((json) => setData(json))
      // eslint-disable-next-line no-alert
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <View style={styles.Background}>
      <View style={styles.upper}>
        <View style={styles.secondupper}>
          <HeaderComponent name="Home" navigation={navigation} />
        </View>
        <View style={styles.Header}>
          <View style={styles.input}>
            <Inputcomponent placeholder="What are you looking for?" />
            <Icon name="search" size={18} />
          </View>
          <View style={styles.Top4}>
            <View style={styles.buttonView}>
              <Icon.Button backgroundColor="#FFFFFF" style={styles.Top10}>
                <Diamond name="diamond" size={40} />
                <Text> Beauty</Text>
              </Icon.Button>
              <Text style={styles.middleText}>|</Text>
              <Icon.Button backgroundColor="#FFFFFF" style={styles.shopping}>
                <Fashion name="shopping-bag" size={40} />
                <Text> Fashion</Text>
              </Icon.Button>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.scrollView}>
        <ScrollView height="100%" width="100%" style={styles.scroll}>
          {isLoading ? (
            <ActivityIndicator size="large" color="blue" />
          ) : (
            data.map((item, index) => {
              return (
                <View key={index} style={styles.map}>
                  <Card item={item} pic={ice} index={index} />
                </View>
              );
            })
          )}
        </ScrollView>
      </View>
    </View>
  );
};
export default Home;
