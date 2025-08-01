import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      console.log("User asked:", input);
      setInput("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Body */}
      <View style={styles.body}>
        <Text style={styles.welcomeText}>
          Welcome to RTI's Basecamp.{"\n"}How can I help?
        </Text>
      </View>

      {/* Footer Input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Ask anything..."
          placeholderTextColor="#888"
          value={input}
          onChangeText={setInput}
        />
        <Pressable onPress={handleSend} style={styles.sendButton}>
          <Ionicons name="send" size={20} color="#fff" />
        </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerTitle: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
  },
  inputWrapper: {
    flexDirection: "row",
    padding: 10,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 10,
    right: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: "#1D4ED8",
    padding: 10,
    borderRadius: 25,
    marginLeft: 10,
  },
});
