import { View, Text, StyleSheet,Image } from "react-native";
import List from '../components/List';


export default function mealDetails({mealImage,duration, complexity, affordability, id, ingredients,steps}){

    return (
        <View style={[styles.details,]}>
          <View  style={{justifyContent:'center',textAlign:'center',marginBottom:10}}>
           <Image
                 source={{uri :mealImage}}
                 style={{
                   width:300,height:150
                  }}
            />
          </View>
        <View style={{ borderBottomColor: 'black',borderBottomWidth: 2,marginBottom:5}}>
          <Text  style={[styles.detailItem,{fontFamily:'bold',fontSize:24,justifyContent:'center',textAlign:'center'}]}> {id}</Text>
          <Text style={[styles.detailItem, ]}> Duration: {duration}</Text>
          <Text style={[styles.detailItem,]}> Complexity: {complexity}</Text>
          <Text style={[styles.detailItem,{marginBottom:10}]}>Affordability: {affordability}</Text>
        </View>
        <View style={{ borderBottomColor: 'black',borderBottomWidth: 2,marginBottom:10}}>
          <Text style={{fontFamily:'bold',fontSize:24,justifyContent:'center',textAlign:'center'}}>Ingredients</Text>
          <View style={{marginBottom:10}}>
            <List data={ingredients}/>
          </View>
        </View>
        <View> 
          <Text style={{fontFamily:'bold',fontSize:24,justifyContent:'center',textAlign:'center'}}>Steps</Text>
          <List data={steps}/>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    details:{
        alignItems: 'center',
       justifyContent: 'center',
        padding: 10,
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 20,
        justifyContent:'center',
        textAlign:'center',
    },
    textStyle:{
      
    }



})