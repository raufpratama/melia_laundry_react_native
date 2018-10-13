/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToolbarAndroid,
} from 'react-native';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I'm the AboutScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
