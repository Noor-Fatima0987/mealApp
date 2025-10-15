import { Text,View,StyleSheet,Image, Pressable} from "react-native";

function MealItem({item,image,onPress}){
    return(
        <View style={styles.mealItemContainer}>
          <Pressable  
             android_ripple={{color: '#ccc'}}
             style={({pressed})=> [
                styles.button, pressed ?
                styles.buttonPressed : null
            ]}
            onPress={onPress}
           >
            <View style={{justifyContent:'center',textAlign:'center',marginBottom:10}}>
             <Image
                source={{uri: image}}
                style={{
                width:300,height:150
                }}
            /> 
            </View>         
            <Text style={{justifyContent:'center',textAlign:'center'}}>{item}</Text>
          </Pressable>
        </View>
    );
}

export default MealItem;

const styles=StyleSheet.create({
    mealItemContainer:{
        padding:20,
        justifyContent:'center',
        textAlign:'center', 
        alignItems:'center',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
});