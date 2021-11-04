import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Alert } from 'react-native';
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

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(user, pass)
            .then((user) => {
                console.log("signup success");
                showAlert("Inscription réussie", "Vous êtes inscrit !");
                console.log(user);
            })
            .catch(e => showAlert("Inscription échouée", e.toString()));
    }

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword(user, pass)
            .then((user) => {
                console.log("signIn success");
                console.log(user);
                showAlert("Connexion réussie", "Vous êtes connecté !");
                navigation.replace("HomeScreen");
            })
            .catch(e => showAlert("Connexion échouée", e.toString()));
    }

    const logout = () => {
        auth.signOut()
            .then(() => {
                console.log("signOut success");
            })
    }

    return (
        <View>
            <Text>Login</Text>
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

            <Button title="Se connecter" onPress={handleSignIn} />
            <Text></Text>
            <Button title="S'inscrire" onPress={handleSignUp} />

        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default Login;