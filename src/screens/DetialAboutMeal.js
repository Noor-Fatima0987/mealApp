import { StyleSheet,Text , View ,FlatList } from "react-native";
import { MEALS } from "../../data/dummy-data";

import MealDetial from "../components/MealDetial";

function DetialAboutMeal({route,navigation}){
    const mealuniqe=route.params.categoryId;

    const mealData= MEALS.filter((mealItem) => {
        return mealItem.categoryIds.includes(mealuniqe);
    });

    function detialDisplay (item){
        console.log('noor');
        return(
            <MealDetial
              mealImage={item.item.imageUrl}
            />
        );
    }

    return(
        <View style={styles.detialContainer}>
          <Text>Noor</Text>
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