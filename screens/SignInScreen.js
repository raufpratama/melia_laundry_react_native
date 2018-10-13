/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {ButtonSquare,ButtonCircle,TextView} from '../components/button';

export default class SignInScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the SignInScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
