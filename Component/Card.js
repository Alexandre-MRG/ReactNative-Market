import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const Card = ({product, navigation}) => {
    console.log(product.image);
    console.log(product.title);
    return (
        <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('Produit' , { product: product})}
        
        >
            <Image style={styles.cardImage} source={{uri:product.image}}></Image>
            <Text style={styles.cardText}>{product.title}</Text>
        </TouchableOpacity>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        backgroundColor:'#fff',
        marginTop:16,
        marginBottom:'0%',
        marginLeft:'5%',
        width:"90%",
        shadowColor:'#000',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{
            width:3,
            height:3
        }
    },
    cardImage:{
        width:"100%",
        height:180,
        resizeMode:'cover'
    },
    cardText:{
        padding:10,
        fontSize:14,
        backgroundColor: '#d6d6e2',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    cardTextLeft:{
        padding:10,
        fontSize:14,
        backgroundColor: '#d6d6e2',
        textAlign: 'left'
    },
    cardTextRight:{
        padding:10,
        fontSize:14,
        backgroundColor: '#d6d6e2',
        textAlign: 'right'
    }
})