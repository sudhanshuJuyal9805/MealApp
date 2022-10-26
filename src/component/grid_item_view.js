import {StyleSheet,View,Text} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
const GridItemView=(props)=>{

    return (
        <View style={ {flex:1} }>
        <TouchableOpacity style={{flex:8,}} onPress={props.onClick}>
<View style={
            [{backgroundColor:props.itemData.color},styles.itemView]
          }> 
    <Text>{props.itemData.title}</Text>
</View>
</TouchableOpacity>
</View>

    )
}
export default GridItemView

const styles=StyleSheet.create({

    itemView:{

        flex: 1,
        flexDirection: 'column',
        margin: 1,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        height:120,
        borderRadius:10,
        marginLeft:5,
        marginRight:5,
        marginBottom:5,
      }

})