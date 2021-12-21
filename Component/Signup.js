import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

const Signup = ({ navigation }) => {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {

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

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(user, pass)
            .then((user) => {
                console.log("signup success");
                showAlert("Inscription réussie", "Vous êtes inscrit !");
                console.log(user);
            })
            .catch(e => showAlert("Inscription échouée", e.toString()));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estiam Market</Text>
            <Text></Text>
            <Text style={styles.subtitle}>Inscription</Text>
            <TextInput
                style={styles.input}
                placeholder={"Utilisateur"}
                onChangeText={setUser}
                value={user}
            />
            <TextInput
                style={styles.input}
                placeholder={"Mot de passe"}
                onChangeText={setPass}
                value={pass}
                secureTextEntry={true}
            />

            <Text></Text>
            <Button title="S'inscrire" onPress={handleSignUp} color='#00b1cc'/>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        marginTop:'20%',
        margin:'5%',
        textAlign:'center'
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center'
    },
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
    },
    image:{
        width:'15%'
    },
    link:{
        textAlign:'center',
        color:'royalblue',
        textDecorationLine: 'underline'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Signup;