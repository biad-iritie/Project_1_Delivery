import React from 'react';
//import { createStackNavigator } from 'react-navigation';
import { createStackNavigator } from '@react-navigation/stack';



import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupCustScreen from '../screens/SignupCustScreen';
import Colors from '../constants/Colors';
//import SignupDeliveryScreen from '../screens/SignupDeliveryScreen';

const Stack = createStackNavigator();

const WelcomeNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: 'Connectez-Vous' }}
      />
      <Stack.Screen
        name="SignupCustScreen"
        component={SignupCustScreen}
        options={{ title: 'Inscrivez-Vous' }}
      />
    </Stack.Navigator>
  );
};
/* const WelcomeNavigator = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Connectez-Vous',
      },
    },
    SignupCust: {
      screen: SignupCustScreen,
      navigationOptions: {
        title: 'Inscrivez-Vous',
      },
    },
   SignupDelivery: {
      screen: SignupDeliveryScreen,
      navigationOptions: {
        title: 'Inscrivez-',
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'float',
    headerLayoutPreset: 'center',
    navigationOptions: ({ navigation }) => ({
      headerTintColor: 'red',
      headerTitleStyle: styles.headerTitleStyle,
    }),
    cardStyle: { backgroundColor: '#FFFF' },
    headerBackTitleVisible: false,
  },
  {},
);*/
export default WelcomeNavigator;
