import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, Image, StyleSheet, Alert } from 'react-native';
import { auth, db } from '../firebase';
import Meteo from './Meteo';
import { CartContext } from './CartContext';

const Profil = ({ navigation }) => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        db.collection("profiles").where("user", '==', auth.currentUser.email).onSnapshot(profiles => {
            let currentProfile;
            if (profiles) {
                profiles.forEach(profile => {
                    currentProfile = { id: profile.id, ...profile.data() };
                    setProfile(currentProfile)
                });
            }

            if (currentProfile) {
            }
        })
    }, [])

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
        <View style={styles.container}>
            <View style={styles.background}>
                <Image style={styles.image} source={{uri:profile.avatar}}></Image>
                <View>
                    <Text style={styles.profileItem}>{profile.firstname?profile.firstname:''} {profile.name?profile.name:''}</Text>
                    <Text style={styles.profileItem}>{auth.currentUser?.email??"Informations introuvables"}</Text>
                    <Text></Text>
                    <Text style={styles.profileItem}>{profile.address?profile.address:''} {profile.town ? 'à '+profile.town : ''}</Text>
                </View>
            </View>
            <Text></Text>
            <View style={styles.background}>
            <Meteo town={profile.town}></Meteo>
            </View>
            <Text></Text>
            <Button title="Modifier profil" onPress={() => navigation.navigate("Votre profil")} color='#00b1cc'/>
            <Text></Text>
            <Button title="Historique de commande" onPress={() => navigation.navigate("Commandes")} color='#00b1cc'/>
            <Text></Text>
            <Button title="Se déconnecter" onPress={handleLogout} color='#00b1cc'/>
        </View>
    );
};

export default Profil;

const styles = StyleSheet.create({
    container:{
        margin:'5%'
    },
    background:{
        backgroundColor:'#d6d6e2',
        borderRadius: 7,
        padding:10
    },
    profileItem:{
        textAlign:'center',
        fontSize:15
    },
    image:{
        width:100,
        height:100,
        resizeMode:'cover',
        alignSelf:'center',
        backgroundColor:'black',
        marginBottom: 10,
        borderRadius: 50
    }
})