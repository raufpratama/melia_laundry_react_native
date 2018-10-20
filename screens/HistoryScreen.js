/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
} from 'react-native';
import { Options } from '../components/toolbar';
import {Header} from 'react-native-elements';

export default class HistoryScreen extends Component {
  _klik = () => alert('crot');

  render() {
    return (
      <View style={styles.container}>
      <Header
        backgroundColor='#F57C00'
        outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 30}}
        placement='left'
        centerComponent={{ text: 'PESANAN', style: { color: '#fff',fontWeight:'bold',fontSize:16 } }}
        rightComponent={<Options methodLogout={this._klik}/>}
        />
        <Text>I'm the HistoryScreen component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
