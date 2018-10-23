/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ToolbarAndroid,
  StatusBar,
  Platform,
  Image,
} from 'react-native';
import { ToolbarHeader } from '../components/toolbar';

export default class AboutScreen extends Component {
  _klik = () => alert('crot');
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
        <ToolbarHeader title={'TENTANG'} methodLogout={this._klik} backgroundColor='#F57C00'/>
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
