import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MealsCategory from './src/screens/MealsCategory'
import FavouriteTab from './src/screens/Favourite'
import {MealScreenNavigator} from './CustomNavigation'
// import Icon from 'react-native-ionicons'
import store from './src/redux/store'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Provider } from 'react-redux'
const Tab=createBottomTabNavigator()
console.warn('store'+store)

export default function App() {

  const Meals = "Meal";
const Favourites = "Favourite";
 return (
  <Provider store={store}>
  <NavigationContainer>
    <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Meal') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Favourite') {
              iconName = focused ? 'heart' : 'heart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          activeTintColor: 'tomato',
          inactiveTintColor: 'black',
        })
      
      }
       
      >
  <Tab.Screen
  
  name="Meal" component={MealScreenNavigator} />
  <Tab.Screen name="Favourite" component={FavouriteTab} />
</Tab.Navigator>
</NavigationContainer>
</Provider>
);

}

const styles = StyleSheet.create({})
                                                                      

