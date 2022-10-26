import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { CATEGORIES } from '../data/dummy_data';
import GridItemView from '../component/grid_item_view';

export default function MealsCategory({navigation}) 
{
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridItem}>
      <FlatList
        data={CATEGORIES}
        renderItem={({item,index}) => (
        
              <GridItemView
              onClick={() => {
                navigation.navigate('SelectedMealScreen',{item})
              }}
                itemData={item}
              ></GridItemView>
        )}
        numColumns={2}
        keyExtractor={(item, index) => index}
      />
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  gridItem: {
		flex: 1,
		margin: 15,
		height: 150,
		borderRadius: 10,
	},
});