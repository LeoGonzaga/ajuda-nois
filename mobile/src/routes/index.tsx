import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Welcome } from "../screens/Welcome";
import { Home } from "../screens/Home";
import { colors } from "../constants/colors";
const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Screen name="Home" component={Home} options={{ title: "",  }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;