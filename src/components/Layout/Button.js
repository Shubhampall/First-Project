import React from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Button
  } from 'react-native';

const ButtonComponent=({title,navigation,page=null})=>{
    return (
        <Button 
        title={title}
        color="#663399"
        onPress={()=>{
          page !=null ? navigation.navigate(page):alert("Please check")
        }}
        />
    )
}
const styles = StyleSheet.create({

  
  });
export default ButtonComponent
