import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, TextInput,FlatList, StyleSheet } from 'react-native';

const Meteo = ({town}) => {
    const [meteo, setMeteo] = useState("")
    const [temp, setTemp] = useState("")
    const [humidity, setHumidity] = useState("")

    useEffect(() => {
        fetchMeteo();
        // headers:{ 'Content-Type': 'application/json' },

    }, [town])

    async function fetchMeteo(){
        let _town = town.toLowerCase();
        let result = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+_town+"&appid=e12f007b737ea72ebf8119e72326692d");

        let jsonResult = await result.json();
        console.log(jsonResult);
        setMeteo(jsonResult);

        setTemp(jsonResult.main.temp);
        setHumidity(jsonResult.main.humidity);
    }
    
    console.log("render")
    return (
        <View>
            <Text style={styles.title}>Météo</Text>
            <Text style={styles.item}>Ville : {meteo.name}</Text>
            <Text style={styles.item}>Température : {Math.round((temp-273.15) * 10) / 10}°</Text>
            <Text style={styles.item}>Humidité : {humidity}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize:15,
        marginBottom: 10
    },
    item:{
        textAlign:'center',
        fontSize:15
    }
})

export default Meteo;