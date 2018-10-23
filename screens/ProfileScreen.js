/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  Platform,
  ImageBackground,
} from 'react-native';
import { ToolbarHeader } from '../components/toolbar';
import { Thumbnail, Button, Icon, Form, Item, Label, Input } from 'native-base';

export default class ProfileScreen extends Component {
  _klik = () => Alert.alert('klik!');

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
        <ToolbarHeader title='PROFIL' methodLogout={this._klik} backgroundColor='#F57C00'/>
        <ImageBackground source={require('../img/background.png')} style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
          <Thumbnail large source={require('../img/kaneki.jpg')}/>
          <Text style={styles.user_name}>Kaneki2012</Text>
          <Text style={styles.email_user}>iam_aghoul@gmail.com</Text>
          <Button small rounded success style={styles.button_edit}>
            <Icon name='cog'/>
            <Text style={{color:'#ffff'}}>Edit Profil</Text>
          </Button>
        </ImageBackground>
        <View style={{flex:3,padding:10}}>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input disabled>Muhammad Rauf Pratama</Input>
            </Item>
            <Item stackedLabel>
              <Label>Nomor Telpon</Label>
              <Input disabled>+62812 6343 0534</Input>
            </Item>
            <Item stackedLabel>
              <Label>Alamat</Label>
              <Input disabled>Jln STM Suka Tani</Input>
            </Item>
          </Form>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user_name: {
    fontSize: 16,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    color: '#ffff',
    marginTop: 10
  },
  email_user : {
    fontSize: 13,
    color: '#ffff',
    marginTop: 1
  },
  button_edit : {
    alignSelf: 'center',
    marginTop: 20,
    paddingRight: 15
  }
});
