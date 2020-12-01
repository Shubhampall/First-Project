import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Inputcomponent = ({placeholder, show = false, handle}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={show}
      style={styles.input}
      onChangeText={(text) => handle(text)}
    />
  );
};
const styles = StyleSheet.create({
  input1: {
    width: '80%',
  },
});

export default Inputcomponent;
