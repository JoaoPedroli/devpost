import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Search } from '../pages/Search';
import { NewPost } from '../pages/NewPost';
import { PostsUser } from '../pages/PostsUser';

import { backgrounds, whites } from '../global/theme.json';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackScreen = () =>
  <Stack.Navigator>
    <Stack.Screen
    name='Home'
    component={Home}
    options={{headerShown: false}}/>

    <Stack.Screen
    name='NewPost'
    component={NewPost}
    options={{
      headerTintColor: whites[0],
      headerStyle: {
        backgroundColor: backgrounds[0],
      }
    }}/>

    <Stack.Screen
    name='PostsUser'
    component={PostsUser}/>
  </Stack.Navigator>

export const AppRoutes = () =>
  <Tab.Navigator
  tabBarOptions={{
    keyboardHidesTabBar: true,
    showLabel: false,
    style: {
      backgroundColor: backgrounds[1],
      borderTopWidth: 0,
    },

    activeTintColor: whites[0],
  }}>
    <Tab.Screen
    name='Home'
    component={StackScreen}
    options={{
      tabBarIcon: ({ color, size }) => {
        return <Icon name='home' color={color} size={size}/>
      }
    }}/>

    <Tab.Screen
    name='Search'
    component={Search}
    options={{
      tabBarIcon: ({ color, size }) => {
        return <Icon name='search' color={color} size={size}/>
      }
    }}/>

    <Tab.Screen
    name='Profile'
    component={Profile}
    options={{
      tabBarIcon: ({ color, size }) => {
        return <Icon name='user' color={color} size={size}/>
      }
    }}/>
  </Tab.Navigator>
