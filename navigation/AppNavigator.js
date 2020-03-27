/* eslint-disable react/jsx-no-undef */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainTabNavigator from './MainTabNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import WelcomeNavigator from './WelcomeNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" headerMode="none">
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="AuthLoading" component={AuthLoadingScreen} />
        <Stack.Screen name="Welcome" component={WelcomeNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/* export default createAppContainer(
  createSwitchNavigator(
    {
      You could add another route here for authentication.
      Read more at https://reactnavigation.org/docs/en/auth-flow.html
      Main: MainTabNavigator,
      AuthLoading: AuthLoadingScreen,
      Welcome: WelcomeNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
      //initialRouteName: 'Main',
    },
  ),
); */
