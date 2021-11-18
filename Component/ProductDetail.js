import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, Image, View, StyleSheet, Alert } from 'react-native';
import { CartContext } from './CartContext';

const ProductDetail = ({route, navigation}) => {

    const [context, setContext] = useContext(CartContext);
    const { image, title, description, price } = route.params.product;
    console.log(route.params.product)

    const addToCart = () => {
        var tempContext = context;
        tempContext.push({name: title, price: price, image: image, id: new Date()})
        setContext(tempContext);

        showAlert("Ajout au panier","Produit ajouté au panier");
        navigation.navigate('Boutique');

    }

    const showAlert = (title, message) => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: "Ok",
                    style: "cancel",
                },
            ],
            {
                cancelable: true
            }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price} €</Text>
            <Text></Text>
            <Image style={styles.image} source={{uri:image}}></Image>
            <Text></Text>
            <Text style={styles.description}>{description}</Text>
            <Text></Text>
            <Button style={styles.button} title="Ajouter au panier" onPress={addToCart} color='#00b1cc'/>
        </View>
    );
};

export default ProductDetail;

const styles = StyleSheet.create({
    container:{
        margin:'5%',
        textAlign:'center'
    },
    image:{
        width:"100%",
        height:'50%',
        resizeMode:'cover'
    },
    title:{
        fontWeight: 'bold',
        fontSize:14,
        textAlign:'left'
    },
    price:{
        fontWeight: 'bold',
        fontSize:13,
        textAlign:'left',
        color:'#00b1cc'
    },
    description:{
        fontSize:12,
        textAlign:'left'
    },
    button:{
        width:'50%',
    }
})