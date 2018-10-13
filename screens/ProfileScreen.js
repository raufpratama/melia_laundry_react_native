/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import { Toolbar } from '../components/toolbar';

export default class ProfileScreen extends Component {
  _klik = () => Alert.alert('klik!');

  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the ProfileScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
