import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import  Icon  from 'react-native-vector-icons/Entypo'
import  Bell  from 'react-native-vector-icons/FontAwesome'
import Basket from 'react-native-vector-icons/MaterialIcons'
const CheckIcon=({name})=>{
 if(name=="Home"){
 return(<Icon.Button  backgroundColor="#FFFFFF">
     <Icon name="menu" size={30} />
 </Icon.Button>)
 }
}
const HeaderComponent=({name})=>{
    return (
        <View style={styles.Header}>
          <CheckIcon name={name}/>
           <Text style={styles.text}>{name}</Text>
          <View style={{flexDirection:'row',left:"43%"}}>
          <Icon.Button  style={styles.button} 
          backgroundColor="#FFFFFF">
            <Bell name="bell" size={20} />
          </Icon.Button>
          <Icon.Button  style={styles.button}
          backgroundColor="#FFFFFF">
            <Basket name="shopping-basket" size={25} />
            </Icon.Button>
        </View> 
        </View>
    )
}
const styles = StyleSheet.create({
    Header: { 
       flexDirection:'row', 
       width:"100%",
       height:"10%",
       backgroundColor:"#FFFFFF",
       top:0,
       position:"absolute",
       elevation:1
      },
      text:{
          fontSize:18,
          top:11,
        },
     button:{
         top:5,
         width:"80%"
         
     }
  });
export default HeaderComponent
