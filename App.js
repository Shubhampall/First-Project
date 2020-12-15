/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import index from './src/components/Main';
import LoginContainer from './src/components/Login/LoginContainer';
import RegistrationContainer from './src/components/Registration/RegistrationContainer';
import Login from './src/components/Login';
const Stack = createStackNavigator();
const App = () => {
  return (
    // <Provider store={ConfigStore}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode={null}>
        <Stack.Screen name="Login" component={LoginContainer} />
        <Stack.Screen name="Registration" component={RegistrationContainer} />
        <Stack.Screen name="Main" component={index} />
      </Stack.Navigator>
    </NavigationContainer>
    // </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
