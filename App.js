import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './src/screens/MealOverViewScreen';
import DetialAboutMeal from  './src/screens/DetialAboutMeal';
import CategoryScreen from './src/screens/CategoryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: '#fac61cff'}, contentStyle: {backgroundColor: '#fde598ff'}}}>
       <Stack.Screen
          name="Categories"
          component={CategoryScreen}
       />
       <Stack.Screen
          name="MealOverView"
          component={MealOverViewScreen}
           options={{title: "Meals Details"}}
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
    backgroundColor: '#f9db7aff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
      