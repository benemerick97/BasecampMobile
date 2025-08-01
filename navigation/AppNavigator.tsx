import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack({ navigation }: { navigation: any }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Basecamp",
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                size={24}
                color="black"
                style={{ marginLeft: 15 }}
              />
            </Pressable>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="HomeStack test shit" component={HomeStack} />
        {/* Add more drawer items/screens here if needed */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
