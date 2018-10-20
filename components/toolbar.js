import React, { Component } from 'react';
import {Text,View,StyleSheet, Image} from 'react-native';
import OptionsMenu from 'react-native-options-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
const icon_setting = (<Icon name='more-vert' size={24} color='#ffff'/>);

export const Toolbar = ({title,methodLogout,backgroundColor,title_color,
                         title_size,fontWeight,widthLogo,heightLogo,
                         optionLogoSize,optionLogoName,optionLogoColor,marginRight}) => (
  <View style={[{backgroundColor},styles.main_container]}>
    <Image source={require('../img/logo_icon.png')} style={{width:widthLogo,height: heightLogo,marginRight}}/>
    <Text style={{color:title_color,fontWeight,fontSize:title_size}}>{title}</Text>
  </View>
)

export const Options = ({methodLogout}) => (
  <OptionsMenu
    customButton={icon_setting}
    buttonStyle={{width:32,height:8,color: '#ffff'}}
    options={["Logout"]}
    actions={[methodLogout]}
  />
)

const styles = StyleSheet.create({
  main_container: {
    width:'100%',
    height:50,
    padding:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
