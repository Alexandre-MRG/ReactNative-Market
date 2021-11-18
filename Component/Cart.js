import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, StyleSheet, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { CartContext } from './CartContext';

const Cart = ({navigation}) => {

    const [context, setContext] = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        // A chaque mise à jour du contexte
        var _total = 0;
        context.map((product, i) => {
            if(product.price != undefined){
                _total += product.price;
            } 
        })
        setTotal(_total);
     }, [context])

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

    const removeFromCart = (id) => {
        var tempContext = [];
        context.map((product, index) => {
            if(product.id != id){
                tempContext.push(product);
            }
        })
        setContext(tempContext);
    }

    const sendFireStore = () => {
        db.collection("orders").add({user: auth.currentUser?.email??"Non trouvé",date: new Date(), price: total, products: context})
        .then(() => {
            console.log("save order with success");
            showAlert("Commande validée", "Votre commande a bien été prise en compte !");
            setContext([]);
            navigation.navigate('Boutique');
        })
    }

    //console.log(context);
    return (
        <View style={[styles.container, {flexDirection:'column', flex: 1} ]}>
            <Text style={styles.subtitle}>Articles</Text>
            <Text/>
            <View style={styles.hrLine}/>
            <ScrollView style={[styles.itemList,{ flex: 2 }]}>
            <Text/>
            {
                context.map((product, i) => {
                    console.log(product.name);
                    console.log(i);
                    if(product.name != undefined){
                        return (
                            <View style={[styles.item,{flexDirection:'row', flex:1}]}>
                            <View style={{flex:2}}>
                                <Image style={styles.image} source={{uri:product.image}}></Image>
                            </View>
                            <View style={{flex:2.5}}>
                                <Text style={styles.title}>{product.name} </Text>
                                <Text style={styles.price}>{product.price} €</Text>
                            </View>
                            <View style={{flex:0.5, marginTop:10}}>
                                <TouchableOpacity
                                style={styles.card}
                                onPress={() => removeFromCart(product.id)}
                                >
                                    <FontAwesome name="remove" size={20} color="black" />
                                </TouchableOpacity>
                            </View>
                            </View>
                        )
                    } 
                })
            }
            <Text/>
            </ScrollView>
            <View style={{flex: 0.3}}>
            <View style={styles.hrLine}/>
            <Text/>
            <Text style={styles.subtitle}>Résumé de paiement</Text>
            <Text style={styles.title}>Montant total : {total} €</Text>
            <Text/>
            <Button style={styles.button} title="Paiement sécurisé" onPress={sendFireStore} color='#00b1cc'/>
            </View>
        </View>
    );
};

export default Cart;

const styles = StyleSheet.create({
    container: {
        margin: '5%',
        textAlign: 'center'
    },
    image: {
        width: 120,
        height: 60,
        resizeMode: 'cover'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'left'
    },
    subtitle: {
        color: 'gray',
        fontWeight: 'bold'
    },
    price: {
        fontWeight: 'bold',
        fontSize: 13,
        textAlign: 'left',
        color: '#00b1cc'
    },
    description: {
        fontSize: 12,
        textAlign: 'left'
    },
    button: {
        width: '50%'
    },
    item:{
        marginLeft: '5%',
        marginBottom:'5%'
    },
    itemList:{
    },
    hrLine:{
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    }
})