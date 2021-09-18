import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import AppStack from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AppStack />
    </>
  );
}
