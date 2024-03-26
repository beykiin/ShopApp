import React from "react";
import {View, Text, Image, SafeAreaView } from "react-native";
import styles from "./ProductCard.style"

const  ProductCard = ({product}) => {
    return (
        
        <SafeAreaView style= {styles.upperContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: product.imgURL}} />
                <View style={styles.innerContainer}>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                    {product.inStock ? false : <Text style={styles.inStock}>Stokta Yok</Text>}
                </View>
            </View>
        </SafeAreaView>
    )

}

export default ProductCard