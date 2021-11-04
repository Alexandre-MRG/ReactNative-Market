import React, { useEffect, useState, useContext } from 'react';
import { Button, Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { auth, db } from '../firebase';
const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    useEffect(() => {
        console.log(firstName);
    }, [firstName])

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
        db.collection("contacts").add({firstName: firstName, name: name, mail: mail})
        .then(() => {
            console.log("save with success");
            showAlert("Informations envoyées", "Merci "+firstName+" pour vos coordonnées !");
        })
    }

    const updateFirestore = () => {
        db.collection("contacts").doc("Qlt6s4hBmUPJqex5G8iN").update({name:"Alex", age:"24"})
        .then(() => {
            console.log("update with success");
        })
    }
    
    const deleteFirestore = () => {
        db.collection("contacts").doc("Qlt6s4hBmUPJqex5G8iN").delete()
        .then(() => {
            console.log("delete with success");
        })
    }

    return (
        <View>
            <Text style={[styles.title]}>Contact</Text>
            <TextInput
                style={styles.input}
                placeholder={"Prénom"}
                onChangeText={setFirstName}
                value={firstName}
            />
            <TextInput
                style={styles.input}
                placeholder={"Nom"}
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                placeholder={"Mail"}
                onChangeText={setMail}
                value={mail}
            />
            <Text></Text>
            <Button title="Envoyer" onPress={sendFireStore} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default ContactForm;