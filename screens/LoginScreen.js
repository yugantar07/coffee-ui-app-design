import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [visible, setVisible] = useState(true);

  const staticUsername = "Admin123";
  const staticPassword = "Password123";

  const validateForm = () => {
    let errors = {};

    if (!username) errors.username = "Username is required";
    if (!password) errors.password = "Password is required";

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (username === staticUsername && password === staticPassword) {
        console.log("Login Successful");
        navigation.navigate("Welcome");
        setUsername("");
        setPassword("");
        setErrors({});
      } else {
        console.log("Invalid credentials");
        Alert.alert("Invalid credentials");
      }
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image
            source={require("../assets/coffeelogo.png")}
            style={styles.logo}
          />
          <Text style={styles.label}>Username</Text>
          <TextInput
            placeholder="Enter your username"
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            keyboardType="email-address"
          />
          {errors.username && (
            <Text style={styles.errorText}>{errors.username}</Text>
          )}

          <Text style={[styles.label, { marginTop: 10 }]}>Password</Text>

          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={visible? true:false}
          />
          <TouchableOpacity
            style={{ left: 120, bottom: 40 }}
            onPress={() => setVisible((prev) => !prev)}
          >
            {visible ? (
              <Feather name="eye-off" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="black" />
            )}
          </TouchableOpacity>
          {errors.password && (
            <Text style={styles.errorText}>{errors.password}</Text>
          )}

          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => console.log("Forgot password pressed")}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <View style={styles.signUpContainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
              <Text style={styles.signUpText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    elevation: 5,
    width: "90%",
    alignItems: "center",
    paddingVertical: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "flex-start",
    marginLeft: "5%",
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "lightgrey",
    padding: 10,
    marginHorizontal: "5%",
    marginVertical: 10,
    fontSize: 16,
    color: "black",
    width: "90%",
    height: 40,
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start",
    marginLeft: "5%",
    marginBottom: 5,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginRight: "5%",
    marginBottom: 10,
  },
  forgotPasswordText: {
    fontWeight: "bold",
    fontSize: 13,
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
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  signUpText: {
    fontWeight: "bold",
  },
});

export default LoginScreen;
