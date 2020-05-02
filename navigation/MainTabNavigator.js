import React from 'react';
/* import {
  createStackNavigator,
  createBottomTabNavigator,
} from '@react-navigation/stack';
 */
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconOutline } from '@ant-design/icons-react-native';
//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AddCourseScreen from '../screens/AddCourseScreen';
import DetailCourseScreen from '../screens/DetailCourseScreen';
import AnswerCourse from '../screens/AddCourseScreen';
import Colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
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
const MyCourses = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyCourses"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen
        name="MyCourses"
        component={MyCoursesScreen}
        options={{ title: 'Mes courses' }}
      />
      <Stack.Screen
        name="DetailCourse"
        component={DetailCourseScreen}
        options={{ title: 'Detail' }}
      />
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
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.tintColor1,
      }}
    >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Profile',
        }}
      />
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
              iconName = 'global';
              break;
            case 'Mes Courses':
              iconName = focused ? 'ordered-list' : 'unordered-list';
              break;
            case 'Profil':
              iconName = 'user';
              break;
            default:
              break;
          }

          // You can return any component that you like here!
          return <IconOutline name={iconName} size={size} color={color} />;
          //return <IconFill name={iconName} size={size} color={color} />;
          //return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Accueil" component={HomeStack} />
      <Tab.Screen name="Mes Courses" component={MyCourses} />
      <Tab.Screen name="Profil" component={SettingsStack} />
    </Tab.Navigator>
  );
};

tabNavigator.path = '';

export default tabNavigator;
