import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/coffeelogo.png")} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
});
