import React, { useEffect, useState, useContext } from 'react';
import { SafeAreaView, Image, Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import Card from './Card';

const Shop = ({navigation, route}) => {
    return (
        <SafeAreaView style={{ flexDirection: 'column', flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://cars-up.fr/wp-content/uploads/2020/12/3V8A4806-scaled.jpg",
                            title: "BMW E46",
                            description: "Une voiture de marque BMW, série 3 de génération E46",
                            price: 8500
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://www.automobile-sportive.com/images/news/bmw-m2-cs-2020.jpg",
                            title: "BMW M2",
                            description: "Une voiture de marque BMW, M2 préparée par motorsport",
                            price: 62000
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://www.evspecifications.info/wp-content/uploads/2019/12/Audi-e-tron-specifications-evchargeplus-2-e1617018551153.png",
                            title: "Audi E-Tron GT",
                            description: "Une voiture de marque Audi, électrique",
                            price: 105000
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://photoref.carboatservices.fr/TUFaREE=/TVg1/14e4886b9f34eb35058f1f7526ae537a/MQ==/e67f145505915d3a4c7b2a08f09e9dda.png",
                            title: "Mazda MX5",
                            description: "Une voiture de marque Mazda, coupé sportif japonais",
                            price: 31300
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://www.tuningblog.eu/wp-content/uploads/2019/09/Kahn-Widebody-Range-Rover-Sport-SVR-Pace-Car-Tuning-3.jpg",
                            title: "Range Rover SVR",
                            description: "Une voiture de marque Land Rover, un SUV sportif",
                            price: 154800
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://maxton-design.fr/fre_pl_LAME-DU-PARE-CHOCS-AVANT-V-1-Mitsubishi-Lancer-Evo-X-819_5.jpg",
                            title: "Mitsubishi Lancer Evolution",
                            description: "Une voiture de marque Mitsubishi, une japonaise sportive",
                            price: 28500
                        }}
                        />
                    <Card
                        navigation = {navigation}
                        route = {route}
                        product={{
                            image: "https://images.elite-auto.fr/visuel/modeles/600x400/honda_civic_type_r_2020.png",
                            title: "Honda Civic Type R",
                            description: "Une voiture de marque Honda, une japonaise sympathique",
                            price: 26990
                        }}
                        />
                </View>
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 6,
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
});

export default Shop;