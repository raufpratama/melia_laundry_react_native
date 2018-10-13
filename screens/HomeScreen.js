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

export default class HomeScreen extends Component {
  _klik = () => {
    Alert.alert('klik!');
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00'/>
        <Toolbar
          title='Home'
          backgroundColor='#F57C00'
          title_color='#ffff'
          title_size={18}
          fontWeight='bold'
          widthLogo={90}
          heightLogo={25}
          optionLogoSize={30}
          optionLogoColor='#ffff'
          method={this._klik}
        />
        <View style={{padding:15}}>
          <Text>I'm the HomeScreen component</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
