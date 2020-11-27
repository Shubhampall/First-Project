import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

const Inputcomponent = ({placeholder, show = false}) => {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextEntry={show}
      style={styles.input}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: '80%',
  },
});

export default Inputcomponent;
