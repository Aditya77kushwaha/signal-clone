import React, { useState } from "react";
import { StyleSheet, Text, KeyboardAvoidingView, View } from "react-native";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { imageUri } from "../Uri";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: imageUri,
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          type="Email"
          autoFocus
          placeholder="email"
          value={email}
          onChange={(text) => {
            setEmail(text);
          }}
        />
        <Input
          type="password"
          secureTextEntry
          placeholder="Password"
          value={password}
          onChange={(text) => {
            setPassword(text);
          }}
        />
      </View>
      <Button title="Login" onPress={signIn} containerStyle={styles.button} />
      <Button title="Register" type="outline" containerStyle={styles.button} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width:300,
  },
  button: {
    width:200,
    marginTop:10
  },
});
