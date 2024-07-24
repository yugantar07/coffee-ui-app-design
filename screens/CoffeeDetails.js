import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';

const CoffeeDetails = ({ route,navigation }) => {
  
  const [num, setNum] = useState(1);

  const handlePlus = () => {
    setNum(num + 1);
  };
  const handleMinus = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  const { item } = route.params;
  console.log(item);
  return (
    <View style={[styles.container, { backgroundColor: item.color }]}>
      <TouchableOpacity style={{top:50,left:10}} onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <Image source={item.img} style={styles.image} />
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginVertical: 20,
          textAlign: "center",
        }}
      >
        {item.drinksName}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "300",
          textAlign: "center",
          paddingTop: 20,
        }}
      >
        {item.description}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add to cart</Text>
          <AntDesign name="shoppingcart" size={22} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#e9c46a" }]}
        >
          <Text style={styles.buttonText}>Buy</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "95%",
          height: 50,
          borderColor: "black",
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 20,
          flexDirection: "row",
          paddingHorizontal: 20,
          bottom: 120,
          position: "absolute",
          alignSelf: "center",
        }}
      >
        <TouchableOpacity onPress={() => handleMinus()}>
          <AntDesign name="minus" size={24} color="black" fontWeight="bold" />
        </TouchableOpacity>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{num}</Text>
        <TouchableOpacity onPress={() => handlePlus()}>
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 200,
    width: 200,
    marginLeft: 100,
    marginTop: 100,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "48%",
    marginVertical: 20,
    marginHorizontal: 4,
    gap: 7,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
