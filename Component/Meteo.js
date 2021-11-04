import React, {useState, useEffect, useContext} from 'react';
import { View, Text, Button, TextInput,FlatList, TouchableOpacity } from 'react-native';

const Meteo = () => {
    const [meteo, setMeteo] = useState("")
    const [temp, setTemp] = useState("")
    const [humidity, setHumidity] = useState("")

    useEffect(() => {
        fetchMeteo();
        // headers:{ 'Content-Type': 'application/json' },

    }, [])

    async function fetchMeteo(){
        let result = await fetch("https://api.openweathermap.org/data/2.5/weather?q=metz&appid=e12f007b737ea72ebf8119e72326692d");

        let jsonResult = await result.json();
        console.log(jsonResult);
        setMeteo(jsonResult);

        setTemp(jsonResult.main.temp);
        setHumidity(jsonResult.main.humidity);
    }
    
    console.log("render")
    return (
        <View>
            <Text style={[{ fontWeight: 'bold' }]}>Météo</Text>
            <Text>Ville : {meteo.name}</Text>
            <Text>Température : {Math.round((temp-273.15) * 10) / 10}°</Text>
            <Text>Humidité : {humidity}%</Text>

        </View>
    );
};

export default Meteo;