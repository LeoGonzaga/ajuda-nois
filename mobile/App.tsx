import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AppStack from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppStack />
    </>
  );
}
