import { StyleSheet, Text, View ,ImageBackground, TouchableOpacity} from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { MEALS } from '../data/dummy_data'
import Item from '../component/Item'

export default function SelectedMealScreen(props)
 {
  var newArray = MEALS.filter(function (el)
{
  return el.categoryIds.includes(props.route.params.item.id)
}
);
  const renderItem = ({item})=>( 
    <Item item={item}/>
  );
  return (
    <View style={styles.container}>
    <FlatList
       data={newArray}
       renderItem={renderItem}
       keyExtractor={item => item.id}
    />
  </View>
  );

}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    padding:2,
  },
})