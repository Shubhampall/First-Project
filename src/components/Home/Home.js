import React from 'react'
import { Text, View,StyleSheet, } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import HeaderComponent from '../Layout/Header'
import Inputcomponent from '../Layout/Input'
import Icon from "react-native-vector-icons/EvilIcons"
import Diamond from "react-native-vector-icons/MaterialCommunityIcons"
import Fashion from "react-native-vector-icons/Fontisto"
import Card from '../Layout/Card'
import articles from "../../constant/article"
import {ice} from '../../constant/images';
const Home=()=>{
    return (
        <View style={styles.Background}>
        <HeaderComponent name="Home"/>
        <View style={styles.Header}>
        <View style={styles.input}>
        <Inputcomponent placeholder="What are you looking for?" />
        <Icon name="search" size={18} />
        </View>
        <View style={{top:"04%"}}>
        <View style={{flexDirection:'row',width:"80%"} }>
          <Icon.Button backgroundColor="#FFFFFF" style={{top:"10%"}}>
            <Diamond name="diamond" size={40} />
          <Text> Beauty</Text>
          </Icon.Button>
          <Text style={{fontSize:50,marginLeft:"10%",top:"01%"}}>|</Text>
          <Icon.Button backgroundColor="#FFFFFF" style={{marginLeft:"10%",top:"10%"}}>
            <Fashion name="shopping-bag" size={40} />
          <Text> Fashion</Text>
          </Icon.Button>
        </View>
        </View>
        </View >
        <ScrollView>
        <Card item={articles[0]} pic={ice} />  
        <Card item={articles[0]} pic={ice} />
        <Card item={articles[0]} pic={ice} />
        <Card item={articles[0]} pic={ice} />
        <Card item={articles[0]} pic={ice} />
        <Card item={articles[0]} pic={ice} />
        </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    Background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor:"#FFFAFA",
        alignItems:"center",
        height:"100%"
        
      },
      Header:{
        borderColor: "black",
        borderWidth:0.1,
        top:"7%",
        borderTopColor:"#FFFFFF",
        backgroundColor: '#FFFFFF',
        right:"20%",
        shadowColor:"black",
        shadowOffset:{width:0,height:1},
        shadowRadius: 2,
        shadowOpacity: 0.05,
        width:"100%",
        left:"0.2%",
        padding:"0.5%",
        alignItems:"center",
        elevation:1,
        height:"25%",
     
        
},
input:{
  marginTop:"05%",
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  width:"90%",
  borderColor: "black",
      borderWidth:0,
      backgroundColor: '#FFFFFF',
      shadowColor:"black",
      shadowOffset:{width:0,height:1},
      shadowRadius: 2,
      shadowOpacity: 0.05,
      borderRadius:5,
      elevation: 2,
},item:{
  marginTop:24,
  padding:30
}

  });
export default Home
