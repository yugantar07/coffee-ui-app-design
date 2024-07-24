import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  
  const coffe = [
    {
      id: 1,
      drinksName: " Cappuccino",
      color: "#727d71",
      img: require("../assets/cappuccino.png"),
      description:
        "Cappuccino is a hot coffee drink made with espresso, steamed milk, and milk foam. It's known for its rich, creamy, and balanced taste and texture, and is often served in a large cup and dusted with chocolate.",
    },
    {
      id: 2,
      drinksName: "Latte",
      color: "#dcc9b6",
      img: require("../assets/latte.png"),
      description:
        "A latte is a coffee drink made with espresso, steamed milk, and a thin layer of frothed milk on top. The combination of these ingredients creates a balanced, milky coffee with a smooth texture and creamy flavor.",
    },
    {
      id: 3,
      drinksName: "Mocha",
      color: "#a39171",
      img: require("../assets/mocha.png"),
      description:
        "Mocha is a sweet, nutty, and chocolatey coffee drink that's a variation of a latte. It's typically made with espresso, steamed milk, and chocolate, and can also include milk or cream, chocolate powder or syrup, shaved chocolate, or milk foam. The chocolate flavoring can be milk or dark.",
    },
    {
      id: 4,
      drinksName: "Americano",
      color: "#abc4ab",
      img: require("../assets/americano.png"),
      description:
        "An Americano is an espresso drink made by mixing espresso with hot water to create a drink similar in volume and strength to regular coffee. The drink is Italian for American coffee and is said to have become popular in Europe during World War II when American soldiers wanted something similar to their drip coffee.",
    },
    {
      id: 5,
      drinksName: "Espresso",
      color: "#727D71",
      img: require("../assets/espresso.png"),
      description:
        "Espresso is a concentrated coffee beverage that's made by forcing hot water through finely ground coffee beans under high pressure. The result is a thicker, richer, and more intense coffee with a natural foam layer on top called crema. Espresso is often served in shots and can be enjoyed on its own or used as a base for other drinks like lattes, cappuccinos, and macchiatos.",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#6d4c3d" }}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 30,
            color: "#ffe6a7",
          }}
        >
          Order Coffee
        </Text>
        <View style={{ flexDirection: "row", marginLeft: 135, gap: 105 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
              marginBottom: 20,
              color: "#fff",
            }}
          >
            Only at Rs. 80
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate("AddToCart")}>
            <AntDesign name="shoppingcart" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={coffe}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.card, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate("Details", { item })}
          >
            <Image source={item.img} style={{ height: 150, width: 150 }} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black",
                marginTop: 15,
                color: "#e5e5e5",
              }}
            >
              {item.drinksName}
            </Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    height: 250,
  },
});
