import { StyleSheet,Text , View ,FlatList } from "react-native";
import { MEALS } from "../../data/dummy-data";
import IconButton from "../components/IconButton";
import { useLayoutEffect ,useContext} from "react";
import { FavouritesContext } from '../../store/context/favorites-context';
import MealDetial from "../components/MealDetial";

function DetialAboutMeal({route,navigation}){
    const mealuniqe=route.params.mealId;
    const favoriteMealsCtx = useContext(FavouritesContext);

    const mealData = MEALS.filter((mealItem) => 
     mealItem.id=== mealuniqe
    );
    const mealsIsFavorite = favoriteMealsCtx.ids.includes(mealuniqe)


    function changeFavoriteStatusHandler(){
    if (mealsIsFavorite){
        favoriteMealsCtx.removeFavorite(mealuniqe);
    }else{
        favoriteMealsCtx.addFavorite(mealuniqe);
    }
    }


    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: () =>{
           return <IconButton icon={mealsIsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteStatusHandler}/>
        }
      })
     },[navigation, changeFavoriteStatusHandler]
    )

    function detialDisplay (item){
        return(
            <MealDetial
              mealImage={item.item.imageUrl}
              id={item.item.title}
              duration={item.item.duration}
              complexity={item.item.complexity}
              affordability={item.item.affordability}
              ingredients={item.item.ingredients}
              steps={item.item.steps}
            />
        );
    }

    return(
        <View style={styles.detialContainer}>
          <FlatList
              data={mealData}
              keyExtractor={(item)=>item.id}
              renderItem={detialDisplay}
          />
        </View>
    );
}
export default DetialAboutMeal;

const styles=StyleSheet.create({
  detialContainer:{
    flex:1,
    padding:20,
  }
});