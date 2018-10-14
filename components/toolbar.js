import React, { Component } from 'react';
import {Text,View,StyleSheet, Image} from 'react-native';
import OptionsMenu from 'react-native-options-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';
const icon_setting = (<Icon name='settings' size={24} color='#ffff'/>);

export const Toolbar = ({title,methodLogout,backgroundColor,title_color,
                         title_size,fontWeight,widthLogo,heightLogo,
                         optionLogoSize,optionLogoName,optionLogoColor,marginRight}) => (
  <View style={[{backgroundColor},styles.main_container]}>
      <Text style={{color:title_color,fontWeight,fontSize:title_size}}>{title}</Text>
      <Image source={require('../img/logo_icon.png')} style={{width:widthLogo,height: heightLogo,marginRight}}/>
      <OptionsMenu
        customButton={icon_setting}
        buttonStyle={{width:32,height:8}}
        options={["Logout"]}
        actions={[methodLogout]}
      />
  </View>
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
