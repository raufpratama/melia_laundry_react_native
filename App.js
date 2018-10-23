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
import HistoryScreen from './screens/HistoryScreen';
import Counter from './components/counter';

export default class App extends Component {
  render(){
    return(
      <HomeMenu/>
    );
  }
}


const HomeMenu = createMaterialBottomTabNavigator({
  Home: {
    screen:HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Beranda',
      tabBarIcon: ()=> (<Icon name="home" size={24} color='#ffff' />),
    },
  },
  HistoryS: {
    screen:HistoryScreen,
    navigationOptions: {
      tabBarLabel: 'Pesanan',
      tabBarIcon: ()=> (<Icon name="list" size={24} color='#ffff' />),
    },
  },
  Order: {
    screen:OrderScreen,
    navigationOptions: {
      tabBarLabel: 'Order',
      tabBarIcon: ()=> (<Icon name="add-shopping-cart" size={24} color='#ffff' />),
    },
  },
  About: {
    screen:AboutScreen,
    navigationOptions: {
      tabBarLabel:'Tentang',
      tabBarIcon: ()=> (<Icon name="help" size={24} color='#ffff' />),
    },
  },
  Profile: {
    screen:ProfileScreen,
    navigationOptions: {
      tabBarIcon: ()=> (<Icon name="person" size={24} color='#ffff' />),
      tabBarLabel:'Profil',
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
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header:null,
    }
  },
  SignUp: {
    screen:SignUpScreen,
    navigationOptions: {
      header:null,
    }
  },
})
