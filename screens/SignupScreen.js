import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{ marginRight: 135,marginBottom:50,gap:10 }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 24,
              marginTop: 20,
            }}
          >
            Let's get started !
          </Text>
          
          <Text style={{fontSize:18}}>Create a new account</Text>
        </View>
        <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 265,
                marginTop:20
              }}
            >
              Name
            </Text>
        <TextInput placeholder="Enter your name" style={styles.input}  />
        <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 265,
                marginTop:20
              }}
            >
              Email
            </Text>
        <TextInput placeholder="Enter your email" style={styles.input} keyboardType="email-address"/>
        <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                marginRight: 230,
                marginTop:20
              }}
            >
              Password
            </Text>
        <TextInput placeholder="Enter your password" style={styles.input} secureTextEntry  />
        <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    elevation: 5,
    width: "90%",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgrey",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    fontSize: 16,
    color: "black",
    width: "90%",
    height: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: "90%",
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
