import { FlatList,View,StyleSheet } from "react-native";
import MealItem from "../MealItem";
import { useNavigation } from "@react-navigation/native";



function MealsList({items}){
    const navigation=useNavigation();

    function mealDisplay (item){ 
        function ingredients(){
           navigation.navigate('DetialOfMeal',{mealId:item.item.id});
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
                data={items}
                keyExtractor={(item)=>item.id}
                renderItem={mealDisplay}
            />
        </View>
    );
}

export default MealsList;

const styles=StyleSheet.create({
    mainContainer:{
        flex:1,
        padding:20,
        justifyContent:'center',
        textAlign:'center',
    },
});
