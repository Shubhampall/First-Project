import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
  } from 'react-native';
  import  Icon  from 'react-native-vector-icons/FontAwesome';
const Inputcomponent =({placeholder,show=false})=> {
  return (
<TextInput
placeholder={placeholder}
secureTextEntry={show}
style={styles.input}
/>
)
}
const styles = StyleSheet.create({
    input: { 
       width:"80%"
      },
  });

export default Inputcomponent
