/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Counter extends Component {
  state = {
    count:0,
  }

  _onDecrease = () => {
    if(this.state.count > 0) {
      this.setState({count:this.state.count-1})
    }
  }

  _onIncrease = () => this.setState({count:this.state.count+1})

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onDecrease} style={{padding:3, borderWidth: 1,borderColor: '#c2c2c2',borderRadius: 100,width: 25,height: 25,alignItems: 'center'}}>
          <Icon name='remove' size={15}/>
        </TouchableOpacity>
        <Text style={{marginRight:10,marginLeft:10}}>{this.state.count}</Text>
        <TouchableOpacity onPress={this._onIncrease} style={{padding:3, borderWidth: 1,borderColor: '#c2c2c2',borderRadius: 100,width: 25,height: 25,alignItems: 'center'}}>
          <Icon name='add' size={15}/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
