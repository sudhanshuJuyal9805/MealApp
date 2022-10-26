import { createStackNavigator } from "@react-navigation/stack";
import MealsCategory from "./src/screens/MealsCategory";
import SelectedMealScreen from "./src/screens/SelectedMealScreen";
import MealDetailScreen from "./src/screens/MealDetailScreen";

const Stack = createStackNavigator()

const MealScreenNavigator = () => {
    return(
        <Stack.Navigator > 
        <Stack.Screen
        options={{headerShown:false}}
         name="MealCategory"
         component={MealsCategory}
       />
        <Stack.Screen
        options={{headerShown:false}}
         name="SelectedMealScreen"
         component={SelectedMealScreen}
       />
       <Stack.Screen
        options={{headerShown:false}}
         name="MealDetailScreen"
         component={MealDetailScreen}
       />
     </Stack.Navigator>
   );
    
}
export {MealScreenNavigator} 