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
      <Text size={5} style={{width:"20%",height:"20%"}}>{item.id}</Text>
      <View style={{width:"auto",height:"60%"}}>
      <Text size={12}>{item.title}</Text>
      </View>
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
    borderRadius:6
 },
 imagecontanor:{
    borderRadius: 6,
    elevation: 1,
    overflow: 'hidden',
    width:"40%",
 },card:{
    borderColor: "black",
    borderWidth:0.1,
    height:"100%",
    borderTopColor:"#FFFFFF",
    backgroundColor: '#FFFFFF',
    right:"20%",
    shadowColor:"black",
    shadowOffset:{width:0,height:1},
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 1,
    width:"97%",
    left:"0%",
    marginTop:"0%",
    padding:"0.5%",
    borderRadius:5,
    flexDirection:"row",
 },cardTitle: {
   flex: 1,
   flexWrap: 'wrap',
   paddingBottom: 6,
   marginBottom:"10%", 
  backgroundColor:"black",
  height:"20%"  
},
  });

export default Card
