import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screen/HomeScreen';
import PortfolioScreen from './src/screen/PortfolioScreen';
import PortfolioScreenDetail from './src/screen/PortfolioScreenDetail';
import TodoScreen from './src/screen/TodoScreen';
import NotificationsScreen from './src/screen/NotificationsScreen';
import CustomDrawerContent from './src/drawer/CustomDrawerContent';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
  // headerShown: true,
});

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}
function PortfolioStack() {
  return (
    <Stack.Navigator initialRouteName="Portfolio">
      <Stack.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={navOptionHandler}
      />
      <Stack.Screen
        name="PortfolioDetail"
        component={PortfolioScreenDetail}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}
function TodoStack() {
  return (
    <Stack.Navigator initialRouteName="Todo">
      <Stack.Screen
        name="Todo"
        component={TodoScreen}
        options={navOptionHandler}
      />
    </Stack.Navigator>
  );
}
function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'ios-list';

          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'Portfolio') {
            iconName = focused ? 'ios-heart' : 'ios-heart-outline';
          } else if (route.name === 'Todo') {
            iconName = focused ? 'list' : 'list';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#ea697a',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioStack}
        options={navOptionHandler}
      />
      <Tab.Screen
        name="Todo"
        component={TodoStack}
        options={navOptionHandler}
      />
    </Tab.Navigator>
  );
}
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="MenuTab"
        drawerContent={props => CustomDrawerContent(props)}>
        <Drawer.Screen
          name="MenuTab"
          component={TabNavigation}
          options={navOptionHandler}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={navOptionHandler}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
