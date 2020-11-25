import React from 'react'
import { block } from 'react-native-reanimated'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Button,
  } from 'react-native';
import {LoginBack}  from '../../constant/images';
import Inputcomponent from '../Layout/Input';
import  Icon  from 'react-native-vector-icons/AntDesign';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Iconsuser from "react-native-vector-icons/FontAwesome"
import ButtonComponent from "../Layout/Button"
import CheckBox from '@react-native-community/checkbox';
const Registration=()=>{
    return (
          <ImageBackground source={LoginBack} style={styles.image}>
          <View style={styles.demo}>
          <View style={styles.signuppage}>
          <View>
          <Text style={{color:"#8898AA"}} size={12}>
                  Sign up with
          </Text>
          </View>
          <View  style={{ flexDirection: 'row'}}>
          <Icon.Button style={styles.button} 
          name="github" 
          backgroundColor="#FFFFFF"
          onPress={()=>alert("Login with Githu")}>
           <Icon name="github" size={30}></Icon>
           <Text style={{color:"blue",marginLeft:10,fontSize:18}}>Github</Text>
          </Icon.Button>
          <Text style={{marginLeft:20}}></Text>
          <Icon.Button style={styles.button}
          backgroundColor="#FFFFFF"
          onPress={()=>alert("Login with Githu")}>
          <Icon name="google" size={34} style={{marginLeft:10}}></Icon>
          <Text style={{color:"blue",marginLeft:10,fontSize:18}}>Google</Text>
          </Icon.Button>
          </View>
          </View>
          <Text style={{color:"#8898AA",top:20}} size={12}>
                  or sign with classic way
          </Text>
          <View style={styles.searchSection}>
          <Iconsuser name="user"  size={20} style={{padding:5}}/>
          <Inputcomponent 
          placeholder="Enter Your Name"
          style={styles.input} />
          </View>
          <View style={styles.searchSection1}>
          <Icons name="email"  size={20} style={{padding:5}}/>
          <Inputcomponent 
          placeholder="Enter Your Email"
          style={styles.input} />
          </View>
          <View style={styles.searchSection1}>
          <Icons name="onepassword"  size={20} style={{padding:5}}/>
          <Inputcomponent placeholder="Enter Your PassWord" show={true} style={styles.input} />   
          </View>
          <Text style={{color:"#8898AA",top:2,marginRight:"55%",fontSize:10}}>
                  Password Strength :
          </Text>
          <View style={{flexDirection: 'row',top:"07%",marginRight:"27%"}}>
            <CheckBox borderColor="#663399" style={{borderWidth:3,borderColor:"663399"}} />
            <Text style={{top:"03%"}}>i agree with the </Text> 
          <Text style={{color:"#663399",top:"03%"}}>Privcy Policy</Text>
          </View>
          <View style={{width:"70%",top:"10%"}}>
          <ButtonComponent title="Sign out " />
          </View>
          </View>
          </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
  demo :{
  backgroundColor:"#FFFAFA",
  width:"90%",
  height:500,  
  borderRadius:10,
  left:"35%",
  marginLeft:"-30%",
  alignItems:"center"
},

signuppage:{
        borderColor: "black",
        borderWidth:0.1,
        height: "20%",
        backgroundColor: '#FFFFFF',
        right:"20%",
        shadowColor:"black",
        shadowOffset:{width:0,height:1},
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
        width:"100%",
        left:"0.2%",
        marginTop:0.7,
        padding:"0.5%",
        alignItems:"center"
},
button:{
        borderColor: "black",
        borderWidth:0,
        backgroundColor: '#FFFFFF',
        shadowColor:"black",
        shadowOffset:{width:0,height:1},
        shadowRadius: 2,
        shadowOpacity: 0.05,
        elevation: 2,
        height:"70%",
        alignItems:"center"
        
},
input:{
},
searchSection: {
    marginTop:"15%",
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
        elevation: 2,
},
searchSection1: {
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
      elevation: 2,
},


});

export default Registration
