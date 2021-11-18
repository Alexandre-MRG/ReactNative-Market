import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, StyleSheet, Alert, TextInput, Image, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth, db } from '../firebase';

const EditProfile = ({ navigation }) => {

    const [firstname, setFirstname] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [town, setTown] = useState('');
    const [avatar, setAvatar] = useState('');
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
                setFirstname(currentProfile.firstname);
                setName(currentProfile.name);
                setAddress(currentProfile.address);
                setAvatar(currentProfile.avatar);
                setTown(currentProfile.town);
            }
        })
    }, [])

    const saveProfile = () => {
        if (profile.id) {
            if (auth.currentUser.email) {
                db.collection("profiles").doc(profile.id).update({ user: auth.currentUser.email, firstname: firstname, name: name, address: address, town: town, avatar: avatar })
                    .then(() => {
                        console.log("update with success");

                        showAlert("Profil modifié", "Les modifications ont été enregistrées");
                        navigation.navigate('Profil');
                    })
            } else {
                alert("Utilisateur non trouvé");
            }
        } else {
            db.collection("profiles").add({ user: auth.currentUser.email, firstname: firstname, name: name, address: address, town: town, avatar: avatar })
                .then(() => {
                    console.log("save with success");

                    showAlert("Profil modifié", "Les modifications ont été enregistrées");
                    navigation.navigate('Profil');
                })
        }
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

            <View style={[styles.item, { flexDirection: 'row' }]}>
                <View style={{ flex: 4.5 }}>
                    <Text style={styles.label}>Prénom</Text>
                    <TextInput style={styles.input} placeholder="saisir prénom" onChangeText={setFirstname} value={firstname} />
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => setFirstname('')}
                    >
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.item, { flexDirection: 'row'}]}>
                <View style={{ flex: 4.5 }}>
                    <Text style={styles.label}>Nom</Text>
                    <TextInput style={styles.input} placeholder="saisir nom" onChangeText={setName} value={name} />
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => setName('')}
                    >
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.item, { flexDirection: 'row' }]}>
                <View style={{ flex: 4.5 }}>
                    <Text style={styles.label}>Adresse</Text>
                    <TextInput style={styles.input} placeholder="saisir adresse" onChangeText={setAddress} value={address} />
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => setAddress('')}
                    >
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.item, { flexDirection: 'row' }]}>
                <View style={{ flex: 4.5 }}>
                    <Text style={styles.label}>Ville</Text>
                    <TextInput style={styles.input} placeholder="saisir ville" onChangeText={setTown} value={town} />
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => setTown('')}
                    >
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.item, { flexDirection: 'row'}]}>
                <View style={{ flex: 4.5 }}>
                    <Text style={styles.label}>Image de profil</Text>
                    <TextInput style={styles.input} placeholder="saisir url image de profil" onChangeText={setAvatar} value={avatar} />
                </View>
                <View style={styles.removeButton}>
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => setAvatar('')}
                    >
                        <FontAwesome name="remove" size={20} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <Text />
            <Button title="Modifier le profil" onPress={saveProfile} color='#00b1cc' />
        </View>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        margin: '5%'
    },
    label: {
        marginLeft: 10,
        marginTop: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    removeButton:{
        flex:0.5,
        marginTop:50
    },
    item: {

    }
})