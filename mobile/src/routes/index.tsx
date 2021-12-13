import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { colors } from "../constants/colors";
import Achevement from "../screens/Achevement";
import Content from "../screens/Content";
import Details from "../screens/Details";
import Home from "../screens/Home";
import Pomodoro from "../screens/Pomodoro";
import PreviousTests from "../screens/PreviousTests";
import Quiz from "../screens/Quiz";
import Welcome from "../screens/Welcome";

const { Navigator, Screen } = createStackNavigator();
const Drawer = createDrawerNavigator();
function Root() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Tests" component={PreviousTests} />
      <Drawer.Screen name="Achevement" component={Achevement} />
      <Drawer.Screen
        name="Pomodoro"
        component={Pomodoro}
        options={{ title: "Pomodoro" }}
      />
      <Drawer.Screen name="Quiz" component={Quiz} />
    </Drawer.Navigator>
  );
}

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
        <Screen name="Root" component={Root} options={{ headerShown: false }} />
        <Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Screen
          name="Home"
          component={Home}
          options={{ title: "", headerShown: false }}
        />
        <Screen
          name="Details"
          component={Details}
          options={({ route }: any) => ({ title: route.params.name })}
        />
        <Screen
          name="Content"
          component={Content}
          options={({ route }: any) => ({
            title: route.params.name,
            headerStyle: {
              backgroundColor: route.params.color,
              elevation: 0,
            },
          })}
        />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
