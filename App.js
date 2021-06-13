import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FirstScreen from './FirstScreen';
import Home from './home';
import Login from './login';
import Register from './register';
import Go from './go';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';

export default function App() {
  return (
    //<Home/>
    //<Login />
    //<FirstScreen />
    //<Register />
    <Go />
  );
}

/*
export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: Login
  },
  About: {
    screen: Register
  }
},{
        initialRouteName: "Home"
});

const AppContainer = createAppContainer(AppNavigator);
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
