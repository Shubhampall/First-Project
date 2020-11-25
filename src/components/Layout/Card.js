import React from 'react'
import { Image,Text,StyleSheet, View } from 'react-native'
import {ice} from '../../constant/images';
const Card=({item,pic})=>{
    return (
         <View style={styles.card} >
        <View style={styles.imagecontanor}> 
        <Image source={pic}style={styles.horizontalImage}/>
        </View>
      <View style={{width:"55%",marginLeft:"3%"}}>
      <Text size={12} style={styles.cardTitle}  >{item.title}</Text>
      <Text size={14} style={{paddingBottom:6,color:"blue"}}>'View article'</Text>
     </View> 
      </View>     
    )
}
const styles = StyleSheet.create({
 horizontalImage:{
    height: 122,
    width: 'auto',
    height:"100%",
 },
 imagecontanor:{
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
    width:"40%",
 },card:{
    borderColor: "black",
    borderWidth:0.1,
    height:"20%",
    borderTopColor:"#FFFFFF",
    backgroundColor: '#FFFFFF',
    right:"20%",
    shadowColor:"black",
    shadowOffset:{width:0,height:1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 1,
    width:"97%",
    left:"1%",
    marginTop:"05%",
    padding:"0.5%",
    borderRadius:5,
    flexDirection:"row",
   
 },cardTitle: {
   flex: 1,
   flexWrap: 'wrap',
   paddingBottom: 6,
   
 },
  });

export default Card
