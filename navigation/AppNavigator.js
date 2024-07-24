import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../screens/Splash";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import CoffeeDetails from "../screens/CoffeeDetails";
import AddToCart from "../screens/AddToCart";

const Stack=createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Welcome" component={HomeScreen}/>
            <Stack.Screen name="Details" component={CoffeeDetails}/>
            <Stack.Screen name="AddToCart" component={AddToCart}/>

        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
