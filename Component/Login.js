import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

const Login = ({ navigation }) => {
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

    const handleSignIn = () => {
        // TEST
        navigation.replace("HomeScreen");
        auth.signInWithEmailAndPassword(user, pass)
            .then((user) => {
                console.log("signIn success");
                console.log(user);
                showAlert("Connexion réussie", "Vous êtes connecté !");
                navigation.replace("HomeScreen");
            })
            .catch(e => showAlert("Connexion échouée", e.toString()));
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estiam Market</Text>
            <Text></Text>
            <Text style={styles.subtitle}>Se connecter</Text>
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
            <Button title="Connexion" onPress={handleSignIn} color='#00b1cc'/>
            <Text></Text>
            <TouchableOpacity
            onPress={ () => navigation.navigate("Inscription")}
            >
            <Text style={styles.link}>Créer un compte</Text>
            </TouchableOpacity>
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

export default Login;