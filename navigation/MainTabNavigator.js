import React from 'react';
import { Platform } from 'react-native';
/* import {
  createStackNavigator,
  createBottomTabNavigator,
} from '@react-navigation/stack';
 */
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CoursesOKScreen from '../screens/CoursesOKScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddCourseScreen from '../screens/AddCourseScreen';
import DetailCourseScreen from '../screens/DetailCourseScreen';
import AnswerCourse from '../screens/AddCourseScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();
/* const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
}); */

/* const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    AddCourse: AddCourseScreen,
    AnswerCourse: AnswerCourse,
  },
  {
    headerBackTitleVisible: false,
  },
  config,
); */

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Homescreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen
        name="Homescreen"
        component={HomeScreen}
        options={{ title: 'Le Monde des courses' }}
      />
      <Stack.Screen
        name="AddCourse"
        component={AddCourseScreen}
        options={{ title: 'Info course' }}
      />
      <Stack.Screen
        name="DetailCourse"
        component={DetailCourseScreen}
        options={{ title: 'Detail' }}
      />
      <Stack.Screen name="AnswerCourse" component={AnswerCourse} />
    </Stack.Navigator>
  );
};

/* HomeStack.navigationOptions = {
  tabBarLabel: 'Courses',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-information-circle'}
    />
  ),
}; */

//HomeStack.path = '';

/* const CoursesOKStack = createStackNavigator(
  {
    Links: CoursesOKScreen,
  },
  config,
);
 */
const CoursesOKStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Courses"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen name="Courses" component={CoursesOKScreen} />
    </Stack.Navigator>
  );
};

/* CoursesOKStack.navigationOptions = {
  tabBarLabel: 'Courses OK',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
}; */

//CoursesOKStack.path = '';

/* const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config,
); */
const SettingsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

/* SettingsStack.navigationOptions = {
  tabBarLabel: 'Paramètres',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};
 */
SettingsStack.path = '';

/* const tabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesOKStack,
  SettingsStack,
}); */
const tabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          //console.log(size);
          switch (route.name) {
            case 'Accueil':
              iconName = Platform.OS === 'ios' ? 'ios-home' : 'md-home';
              break;
            case 'Courses':
              iconName = focused ? 'ios-list' : 'md-list';
              break;
            case 'Info':
              iconName = Platform.OS === 'ios' ? 'ios-options' : 'md-options';
              break;
            default:
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Accueil" component={HomeStack} />
      <Tab.Screen name="Courses" component={CoursesOKStack} />
      <Tab.Screen name="Info" component={SettingsStack} />
    </Tab.Navigator>
  );
};

tabNavigator.path = '';

const mapStateToProps = state => ({
  number: state.reducerAuth.number,
  fullName: state.reducerAuth.fullName,
  id_type_user: state.reducerAuth.id_type_user,
  token: state.reducerAuth.token,
  loading: state.reducerAuth.loading,
});
export default connect(mapStateToProps)(tabNavigator);
