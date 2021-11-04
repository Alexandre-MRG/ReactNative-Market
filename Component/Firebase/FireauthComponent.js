import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import {auth} from '../../firebase';

const FireauthComponent = () => {

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                console.log("je suis connecté");
            }
            else{
                console.log("je ne suis pas connecté");
            }
        })
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword("test2@test.com", "password")
        .then((user) => {
            console.log("signup success");
            console.log(user);
        })
        .catch(e => console.log(e));
    } 

    const handleSignIn = () => {
        auth.signInWithEmailAndPassword("test2@test.com", "password")
        .then((user) => {
            console.log("signIn success");
            console.log(user);
        })
    }

    const logout = () => {
        auth.signOut()
        .then(() => {
            console.log("signOut success");
        })
    }

    return (
            <View>
                <Text>Firebase</Text>
                <Button title={"signUp"} onPress={() => {handleSignUp()}}/>
                <Button title={"signIn"} onPress={() => {handleSignIn()}}/>
                <Button title={"signOut"} onPress={() => {logout()}}/>
            </View>
    );
};

export default FireauthComponent;