import React, { Component } from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export const ButtonCircle = ({method, title,width,marginTop,textColor}) => (
  <TouchableOpacity onPress={method} style={[{width,marginTop},styles.wrapper]}>
    <Text style={[{color:textColor},styles.text]}>{title}</Text>
  </TouchableOpacity>
)

export const TextView = ({method,title,textColor,marginTop}) => (
  <TouchableOpacity onPress={method} style={{borderBottomWidth: 1,borderBottomColor: '#ffff',marginTop}}>
    <Text style={{color:textColor}}>{title}</Text>
  </TouchableOpacity>
)

export const ButtonSquare = ({method,title,width,textColor,marginTop}) => (
  <TouchableOpacity onPress={method} style={[{width,marginTop},styles.buttonSquare]}>
    <Text style={{color:textColor,alignItems: 'center',alignSelf: 'center'}}>{title}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrapper : {
    padding: 12,
    borderWidth: 1,
    borderRadius: 60,
    borderColor: '#ffff'
  },
  text: {
    textAlign: 'center',
    alignItems: 'center',
  },
  buttonSquare: {
    padding:12,
    backgroundColor: '#FF1744',
  }
})
