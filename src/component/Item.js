import { StyleSheet, Text, View,TouchableOpacity,ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Item({item}) {
const [swithOn,SetSwitchOn]=useState(false)

const navigation=useNavigation();
function toggleFavourites()
{
    if(swithOn)
    {
        SetSwitchOn(false)
    }
    else
    {
       
        SetSwitchOn(true)
    }
}
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('MealDetailScreen',{item})}>
    <View style={styles.item}>
      <ImageBackground
        style={{flex:1,
          height: null,
          resizeMode: 'cover',
          width: null,}}
        source={{uri:item.imageUrl}}
    >
        
      <View style={styles.infoContainer}>
      <Text numberOfLines={1} style={{fontSize:18,marginTop:3,textAlign:'center',fontWeight:'bold',letterSpacing:1,}}>{item.title}</Text>

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',textAlign:'center',marginLeft:10,marginRight:10}}>
        
        </View>
        <View style={{flexDirection:'column',justifyContent:'space-evenly',flex:1}}>
        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,marginLeft:60,marginRight:60}}>
         <Text>{item.duration}m</Text>
         <Text>{item.complexity.toUpperCase()}</Text>
         <Text>{item.affordability.toUpperCase()}</Text>
         </View>

         <View style={{alignItems:'flex-end',marginRight:10,marginBottom:10}}>        
             {
               swithOn?<Ionicons name='heart' size={20} color='red' onPress={toggleFavourites} />: <Ionicons name='heart-outline' size={20} color='red' onPress={toggleFavourites} />}
         </View>

        </View>
      </View>
    </ImageBackground>
    </View>
    </TouchableOpacity>
  );
  
}

const styles = StyleSheet.create({
    item: {
        marginLeft:10,
        marginRight:10,
        height:300,
        overflow: "hidden",
        borderRadius:10,
        marginTop:10,
        marginBottom:10
      },
      infoContainer:{
        backgroundColor:'white',
        width:'100%',
        height:'25%',
        flexDirection:'column',
        justifyContent:'space-between',
        position: 'absolute', // child
        bottom: 0, // position where you want
        left: 0,
        flex:1
        }

})