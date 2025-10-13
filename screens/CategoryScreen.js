import React from 'react';
import { FlatList } from 'react-native';
import CategoryTile from "../componants/CategoryTile";
import { CATEGORIES } from '../data/dummy-data';


function renderCategoryItem(item){
    return (
    < CategoryTile title={item.item.title} color={item.item.color} />
    );
}

function CategoryScreen () {
  return (
     <FlatList
         data={CATEGORIES}
         keyExtractor={(item) => item.id}
         renderItem={renderCategoryItem}
         numColumns={2}
        //  key={"_2columns"}
     />
    );
}

export default CategoryScreen;

