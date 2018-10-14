import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OrderScreen from './screens/OrderScreen';
import AboutScreen from './screens/AboutScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';

export default class App extends Component {
  render(){
    return(
      <SignStack/>
    );
  }
}


const HomeMenu = createMaterialBottomTabNavigator({
  Home: {
    screen:LoginScreen,
    navigationOptions: {
      tabBarIcon: ()=> (<Icon name="home" size={24} color='#ffff' />),
    },
  },
  Order: {
    screen:OrderScreen,
    navigationOptions: {
      tabBarIcon: ()=> (<Icon name="list" size={24} color='#ffff' />),
    },
  },
  About: {
    screen:AboutScreen,
    navigationOptions: {
      headerTitle:'About',
      tabBarIcon: ()=> (<Icon name="help" size={24} color='#ffff' />),
    },
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      tabBarIcon: ()=> (<Icon name="person" size={24} color='#ffff' />),
      headerTitle:'Profile',
    },
  },
}, {
  shifting:true,
  activeColor:'#ffff',
  inactiveColor:'#c2c2c2',
  barStyle:{
    backgroundColor:'#F57C00'
  },
});

const SignStack = createStackNavigator({
  SignUp: {
    screen:SignUpScreen,
    navigationOptions: {
      header:null,
    }
  },
})

// const Auth = createSwitchNavigator({
//
// });
