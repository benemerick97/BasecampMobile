import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { api } from "../services/api";

export default function HomeScreen() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    api
      .get("/status") // Replace with your FastAPI test endpoint
      .then((res) => setMessage(res.data.message))
      .catch(() => setMessage("Failed to connect to backend."));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 18 },
});
