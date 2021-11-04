import React, {useEffect} from 'react'
import { View, Text, Button } from 'react-native';
import { auth, db } from '../../firebase';

const FirestoreComponent = () => {

    useEffect(() => {
        db.collection("test").onSnapshot(res => {
            res.forEach(element => {
                console.log(element.data())
            })
        })
    }, [])

    const sendFireStore = () => {
        db.collection("test").add({name:"John", age:"55"})
        .then(() => {
            console.log("save with success");
        })
    }

    const updateFirestore = () => {
        db.collection("test").doc("Qlt6s4hBmUPJqex5G8iN").update({name:"Alex", age:"24"})
        .then(() => {
            console.log("update with success");
        })
    }
    
    const deleteFirestore = () => {
        db.collection("test").doc("Qlt6s4hBmUPJqex5G8iN").delete()
        .then(() => {
            console.log("delete with success");
        })
    }

    return (
        <View>
            <Text></Text>
            <Text>Firestore</Text>
            {
                auth.currentUser
                ?
                <Text>{auth.currentUser.email}</Text>
                :
                <Text>Vous n'êtes pas connecté</Text>
            }
            <Button title="save data" onPress={() => {sendFireStore()}}/>
            <Button title="update data" onPress={() => {updateFirestore()}}/>
            <Button title="delete data" onPress={() => {deleteFirestore()}}/>
        </View>
    );
}

export default FirestoreComponent;
