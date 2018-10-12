import React, { Component } from 'react';
import {TextInput,StyleSheet} from 'react-native';

export const TextBox = ({method,width,placeholder,marginTop,place_color,password}) => (
  <TextInput onChangeText={method} style={[{width,marginTop},styles.text_box]} secureTextEntry={password} placeholder={placeholder} placeholderTextColor={place_color} />
);

const styles = StyleSheet.create({
  text_box: {
    padding:5,
    backgroundColor: '#FB8C00',
    color:'#ffff'
  }
})
