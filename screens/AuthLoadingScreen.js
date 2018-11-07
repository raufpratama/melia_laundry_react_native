/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

export default class AuthLoadingScreen extends Component {
  constructor(props){
  	super(props);
    this.auth();
  }

  auth = async() => {
    const usertoken = await AsyncStorage.getItem('usertoken');
    this.props.navigation.navigate(usertoken ? 'App':'GetStarted');
  }
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={25} color='blue'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
