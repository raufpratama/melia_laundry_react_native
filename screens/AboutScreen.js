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
import { Toolbar, Options } from '../components/toolbar';
import { Header } from 'react-native-elements';

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
      <Header
        backgroundColor='#F57C00'
        outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 30}}
        placement='left'
        centerComponent={{ text: 'TENTANG', style: { color: '#fff',fontWeight:'bold',fontSize:16 } }}
        rightComponent={<Options methodLogout={this._klik}/>}
        />
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
