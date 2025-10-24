import MealItem from "../components/MealItem";
import { MEALS ,CATEGORIES} from "../../data/dummy-data";
import { View,StyleSheet, FlatList } from "react-native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";



function MealOverViewScreen({route,navigation}){

    const mealuniqe=route.params.categoryId;

    const mealData = MEALS.filter((mealItem) => 
     mealItem.categoryIds.includes(mealuniqe)
    );

    useLayoutEffect(()=>{
      const categoryTitle = CATEGORIES.find((category)=> category.id === mealuniqe).title;


    navigation.setOptions({
      title: categoryTitle
    });
  },[mealuniqe, navigation])
   
  return <MealsList items={mealData}/>;
    
};

export default MealOverViewScreen;

