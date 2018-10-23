import React, { Component } from 'react';
import {Text,View,StyleSheet, Image} from 'react-native';
import OptionsMenu from 'react-native-options-menu';
import { Header, Left, Button, Right, Body, Title, Icon } from 'native-base';

export const Toolbar = ({title,methodLogout,backgroundColor,title_color,
                         title_size,fontWeight,widthLogo,heightLogo,
                         optionLogoSize,optionLogoName,optionLogoColor,marginRight}) => (
  <View style={[{backgroundColor},styles.main_container]}>
    <Image source={require('../img/logo_icon.png')} style={{width:widthLogo,height: heightLogo,marginRight}}/>
    <Text style={{color:title_color,fontWeight,fontSize:title_size}}>{title}</Text>
  </View>
)

export const Options = ({methodLogout,icon}) => (
  <OptionsMenu
    customButton={icon}
    options={["Logout"]}
    actions={[methodLogout]}
  />
)

export const ToolbarHeader = ({backgroundColor,title,methodLogout,icon}) => (
  <Header style={{backgroundColor}}>
    <Left style={{flex:1}}>
    </Left>
    <Body style={{flex:0.6}}>
      <Title style={{fontWeight: 'bold'}}>{title}</Title>
    </Body>
    <Right style={{flex:1}}>
      <Button transparent>
        <OptionsMenu
          customButton={<Icon name='more'/>}
          options={["Logout"]}
          actions={[methodLogout]}
        />
      </Button>
    </Right>
  </Header>
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
