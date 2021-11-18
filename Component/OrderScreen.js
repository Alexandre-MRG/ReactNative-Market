import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { auth, db } from '../firebase';
import { CartContext } from './CartContext';
import moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');
moment().format('D MMM YY');

const OrderScreen = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        var _orders = [];
        db.collection("orders").onSnapshot(res => {
            res.forEach(element => {
                //console.log(element.data().user)
                var dateString = new Date(element.data().date.seconds*1000).getDate();
                dateString += "/"+ (new Date(element.data().date.seconds*1000).getMonth()+1);
                dateString += "/"+ new Date(element.data().date.seconds*1000).getFullYear()
                dateString += new Date(element.data().date.seconds*1000).getHours() > 10 ? " à "+ new Date(element.data().date.seconds*1000).getHours()+"h" : " à 0"+ new Date(element.data().date.seconds*1000).getHours()+"h"
                dateString += new Date(element.data().date.seconds*1000).getMinutes() > 10 ?new Date(element.data().date.seconds*1000).getMinutes() : "0"+ new Date(element.data().date.seconds*1000).getMinutes()
                _orders.push({user: element.data().user,date: dateString, price: element.data().price, products: element.data().products})
            })
            setOrders(_orders);
        })
    }, [])

    useEffect(() => {
        //console.log(orders);

    }, [orders])

    const OrdersList = ({ordersProp}) => {
        var orderSorted = ordersProp;

        Array.prototype.sortOn = function(key, orderBy){
            if (orderBy == "ASC"){
                this.sort(function(a, b){
                    if(a[key] < b[key]){
                        return -1;
                    }else if(a[key] > b[key]){
                        return 1;
                    }
                    return 0;
                });
            }
            if (orderBy == "DESC"){
                this.sort(function(a, b){
                    if(a[key] < b[key]){
                        return 1;
                    }else if(a[key] > b[key]){
                        return -1;
                    }
                    return 0;
                });
            }
        }

        ordersProp.sortOn("date", "DESC");

        console.log(orderSorted);
        return (
            <ScrollView style={[styles.itemList,{ flex: 2 }]}>
            {
                ordersProp.map((product, i) => {
                    if(product.price != undefined || product.price != 0){
                        return (
                            <View style={[styles.item,{flexDirection:'row', flex:1}]}>
                            <View style={[styles.orderBox, {flex:1.5}]}>
                                <Text style={styles.title}>Commande du {product.date} </Text>
                                <Text style={styles.price}>{product.price} €</Text>
                            </View>
                            </View>
                        )
                    } 
                })
            }
            </ScrollView>
        )
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

    const sendFireStore = () => {
        db.collection("orders").add({user: auth.currentUser?.email??"Non trouvé",date: new Date().toDateString(), price: total, products: context})
        .then(() => {
            console.log("save order with success");
            showAlert("Commande validée", "Votre commande a bien été prise en compte !");
        })
    }

    //console.log(context);
    return (
        <View style={[styles.container, {flexDirection:'column', flex: 1} ]}>
            <Text style={styles.subtitle}>Historique</Text>
            <Text/>
            <View style={styles.hrLine}/>
            <Text/>
            <OrdersList ordersProp={orders}/>
            <View style={{flex: 0.3}}>
            <View style={[styles.hrLine, {marginTop: '5%'}]}/>
            <Text/>
            <Text style={styles.subtitle}>{orders.length} commande(s) passée(s) </Text>
            <Text/>
            </View>
        </View>
    );
};

export default OrderScreen;

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
        marginLeft: '0%',
        marginBottom:'5%'
    },
    itemList:{
    },
    orderBox:{
        backgroundColor:'#d6d6e2',
        borderRadius: 7,
        padding:10
    },
    hrLine:{
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    }
})