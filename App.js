import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './src/screens/MealOverViewScreen';
import DetialAboutMeal from  './src/screens/DetialAboutMeal';
import CategoryScreen from './src/screens/CategoryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Categories"
          component={CategoryScreen}
       />
       <Stack.Screen
          name="MealOverView"
          component={MealOverViewScreen}
       />
       <Stack.Screen
          name="DetialOfMeal"
          component={DetialAboutMeal}
       />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
      