import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Component/Login';
import Profil from './Component/Profil';
import CVmain from './Component/CVmain';
import ContactForm from './Component/ContactForm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CV" component={CVmain} options={{ headerShown: true }} />
      <Tab.Screen name="Contact" component={ContactForm} options={{ headerShown: true }} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}