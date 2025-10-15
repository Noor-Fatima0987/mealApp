import React from 'react';
import { FlatList ,StyleSheet} from 'react-native';
import CategoryTile from "../components/CategoryTile";
import { CATEGORIES } from '../../data/dummy-data';



function CategoryScreen ({navigation}) {
    function renderCategoryItem(item){
      function categoryHandler()
      {
         navigation.navigate('MealOverView',{categoryId:item.item.id});
      };

    return (
       < CategoryTile 
         title={item.item.title} 
         color={item.item.color} 
         onPress={categoryHandler}
       />
    );
    }
  return (
     <FlatList
         data={CATEGORIES}
         keyExtractor={(item) => item.id}
         renderItem={renderCategoryItem}
         numColumns={2}
     />
    );
}

export default CategoryScreen;

const style=StyleSheet.create({

});

