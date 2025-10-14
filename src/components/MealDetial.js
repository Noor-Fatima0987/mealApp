import { Text,View,StyleSheet,Image } from "react-native";

function MealDetial({mealImage}){
    return(
        <View>
            <Image
               source={{uri :mealImage}}
               style={{
                 width:300,height:150
                }}
            />
            <Text>noor</Text>
        </View>

    );

}

export default MealDetial;

const styles=StyleSheet.create({

});