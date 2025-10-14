import MealItem from "../components/MealItem";
import { MEALS } from "../../data/dummy-data";
import { View,StyleSheet, FlatList } from "react-native";


function MealOverViewScreen({route,navigation}){

    const mealuniqe=route.params.categoryId;

    const mealData = MEALS.filter((mealItem) => 
     mealItem.categoryIds.includes(mealuniqe)
    );

    function mealDisplay (item){ 
        function ingredients(){
           navigation.navigate('DetialOfMeal',{categoryId:mealuniqe});
        };
        return(
           <MealItem
                image={item.item.imageUrl}
                item={item.item.title}
                onPress={ingredients}
           />
        );
    };

    return(
        <View style={styles.mainContainer}>
            <FlatList
                data={mealData}
                keyExtractor={(item)=>item.id}
                renderItem={mealDisplay}
            />
        </View>
    );
};

export default MealOverViewScreen;

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:20,
        justifyContent:'center',
        textAlign:'center',
    },
});