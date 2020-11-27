import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../Home/Home';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { Image, View,StyleSheet} from 'react-native';
import CustomSidebarMenu from "../../constant/CustomSidebarMenu"
import Profile from '../Profile/Profile';

const Drawer = createDrawerNavigator();
const index=()=>{
  return (
  <Drawer.Navigator initialRouteName="Home"  drawerContentOptions={{
    activeTintColor: '#e91e63',
    itemStyle: {marginVertical: 5},
  }}
  // Here we are setting our custom sidebar menu 
  drawerContent={(props) => <CustomSidebarMenu {...props} />}>
          <Drawer.Screen name="Home" component={Home} options={{drawerIcon: () => <Icon name="home" size={20} />}}/>
          <Drawer.Screen name="Profile" component={Profile} options={{drawerIcon: () => <Icon name="user" size={20} />}}/>
        </Drawer.Navigator>
    )
}
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  }
});

export default index
