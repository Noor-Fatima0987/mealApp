import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealOverViewScreen from './src/screens/MealOverViewScreen';
import DetialAboutMeal from  './src/screens/DetialAboutMeal';
import CategoryScreen from './src/screens/CategoryScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Favourite from './src/screens/favourite';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return <Drawer.Navigator 
  screenOptions={{ headerStyle: {backgroundColor: '#fac61cff'},
  headerTintColor: 'black',
  // sceneContainerStyle: { backgroundColor: '#fde598ff'},
  sceneStyle:{backgroundColor: '#fde598ff'},
  drawerContentStyle: { backgroundColor: '#fde598ff' },
  drawerInactiveTintColor:'black',
  drawerActiveTintColor: 'black',
  drawerActiveBackgroundColor: '#f0c949ff',
}}>
    <Drawer.Screen name='Categories' component={CategoryScreen} 
     options={{
      title: 'All Categories',
      drawerIcon: ({color, size})=> (<Ionicons
        name='list' color={color} size={size}/>),
    }}
    />
    <Drawer.Screen name="Favourite" component={Favourite} 
    options={{
      drawerIcon: ({color, size})=>
     (<Ionicons name='star' color={color} size={size}/>)
    }}
    />
  </Drawer.Navigator>
}

export default function App() {
  return (
    <>
      <FavoritesContextProvider>
         <NavigationContainer style={styles.container}>
           <Stack.Navigator 
             screenOptions={{ 
             headerStyle: {backgroundColor: '#fac61cff'},
             headerTintColor: 'black',
             contentStyle: {backgroundColor: '#fde598ff'}
             }}>
              <Stack.Screen
                 name="All Category"
                 component={DrawerNavigator}
                 options={{headerShown: false }}
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
      </FavoritesContextProvider>
    </>
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
      