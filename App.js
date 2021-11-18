import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Profil from './Component/Profile';
import Shop from './Component/Shop';
import ContactForm from './Component/ContactForm';
import Cart from './Component/Cart';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import ProductDetail from './Component/ProductDetail';
import { CartContext } from './Component/CartContext';
import OrderScreen from './Component/OrderScreen';
import EditProfile from './Component/EditProfile';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const [context, setContext] = useContext(CartContext);
  const [itemCount, setItemCount] = useState([]);

  const isFocused = useIsFocused()

  useEffect(() => {
    // A chaque mise à jour du contexte
    setItemCount(context.length);
 }, [isFocused])
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Boutique') {
            iconName = focused
              ? 'shopping-bag'
              : 'shopping-bag';
          } else if (route.name === 'Contact') {
            iconName = focused ? 'envelope-o' : 'envelope-o';
          }
          else if (route.name === 'Profil') {
            iconName = focused ? 'user' : 'user';
          }

          // You can return any component that you like here!
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00b1cc',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Boutique" component={Shop} options={{
        headerShown: true, headerRight: () => (
          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Panier")}
            >
              <Text>{itemCount > 0 ? itemCount : ''}</Text>
              <FontAwesome name="shopping-cart" size={30} color="gray" />
            </TouchableOpacity>

          </View>
        ),
      }} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  )
}

export default function App() {
  const [context, setContext] = useState([]);

  return (
    <CartContext.Provider value={[context, setContext]}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Inscription" component={Signup} options={{ headerShown: true }} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Produit" component={ProductDetail} />
          <Stack.Screen name="Panier" component={Cart} options={{
            headerShown: true, headerRight: () => (
              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setContext([])}
                >
                  <FontAwesome name="trash-o" size={30} color="gray" />
                </TouchableOpacity>

              </View>
            ),
          }} />
          <Stack.Screen name="Commandes" component={OrderScreen} />
          <Stack.Screen name="Votre profil" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartContext.Provider>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    padding: 10,
    marginRight: '5%',
    marginBottom:'5%'
  }
});