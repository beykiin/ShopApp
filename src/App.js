import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import product from './product.json';
import ProductCard from "./components/ProductCard/ProductCard";
import SearchBarPage from "./components/SearchBar/SearchBarPage";


function App(){
    const renderProduct = ({item}) => <ProductCard product={item}/>
    const keyExtractor = item => item.id.toString()
    

    return(
        <SafeAreaView>
          <Text style={styles.header}>PATIKASTORE</Text>
          <View style={styles.line}></View>
            <FlatList ListHeaderComponent={()=>(
                <View>
                    <SearchBarPage/>
                </View>
            )} keyExtractor={keyExtractor} data={product} renderItem={renderProduct} numColumns={2}
            />
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
      header:{
        fontSize:25,
        color:'rebeccapurple',
        marginTop:5,
        fontFamily: 'fantasy',
        fontWeight: '900',
        textAlign: "center", 
      },
      line:{
        height:1,
        borderWidth:1,
        borderColor:'gainsboro',
        marginTop:8,
        
      },
})

export default App;