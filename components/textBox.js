import React, { Component } from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const TextBox = ({method,width,placeholder,marginTop,place_color,password}) => (
  <TextInput
    onChangeText={method}
    style={[{width,marginTop},styles.text_box]}
    secureTextEntry={password}
    placeholder={placeholder}
    placeholderTextColor={place_color}
    />
);

export const TextBoxIcon = ({icon,method,backgroundColor,place_color,textColor,width,placeholder,marginTop,password,text_content,maxLength}) => (
  <View style={[{backgroundColor,width,marginTop},styles.text_icon]}>
    <Icon name={icon} size={20} color='#ffff' style={{padding:10}}/>
    <TextInput onChangeText={method} placeholder={placeholder} style={{color:textColor}} placeholderTextColor={place_color} secureTextEntry={password} keyboardType={text_content} maxLength={maxLength}/>
  </View>
)

const styles = StyleSheet.create({
  text_box: {
    padding:5,
    backgroundColor: '#FB8C00',
    color:'#ffff'
  },
  text_icon : {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  }
})
