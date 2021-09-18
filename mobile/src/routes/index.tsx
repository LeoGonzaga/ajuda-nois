import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Welcome } from '../screens/Welcome';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Welcome" component={Welcome} />
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;