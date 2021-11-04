import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { auth } from '../firebase';
import Meteo from './Meteo';

const Profil = ({ navigation }) => {

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

    const handleLogout = () => {
        auth.signOut()
            .then(() => {
                console.log("signOut success");
                showAlert("Déconnexion réussie", "Vous êtes déconnecté !");
                navigation.navigate("Login");
            })
            .catch(e => showAlert("Déconnexion échouée", e.toString()));
    }

    return (
        <View>
            <Text style={[{ fontWeight: 'bold' }]}>Bienvenue,</Text>
            <Text>{auth.currentUser?.email??"Informations introuvables"}</Text>
            <Text></Text>
            <Meteo></Meteo>
            <Text></Text>
            <Button title="Se déconnecter" onPress={handleLogout} />
        </View>
    );
};

export default Profil;