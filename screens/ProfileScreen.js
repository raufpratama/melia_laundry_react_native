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
  AsyncStorage,
} from 'react-native';
import { ToolbarHeader } from '../components/toolbar';
import { Thumbnail, Button, Icon, Form, Item, Label, Input } from 'native-base';

export default class ProfileScreen extends Component {
  constructor(props){
  	super(props);
  	this.state = {
      user:[],
    };
    this._getData()
  }

  _klik = () => {
    alert('klik!');
  }

  _getData = async() => {
    try {
      const daataa = await AsyncStorage.getItem('usertoken');
      const item = JSON.parse(daataa);
      await this.setState({user:item})
      return item;
    } catch(err) {
      console.log(err.message);
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
        <ToolbarHeader title='PROFIL' methodLogout={this._klik} backgroundColor='#F57C00'/>
        <ImageBackground source={require('../img/background.png')} style={{flex:2,justifyContent: 'center',alignItems: 'center'}}>
          <Thumbnail large source={{uri:this.state.user.uri}}/>
          <Text style={styles.user_name}>{this.state.user.user}</Text>
          <Text style={styles.email_user}>{this.state.user.email}</Text>
          <Button small rounded success style={styles.button_edit}>
            <Icon name='cog'/>
            <Text style={{color:'#ffff'}}>Edit Profil</Text>
          </Button>
        </ImageBackground>
        <View style={{flex:3,padding:10}}>
          <Form>
            <Item stackedLabel>
              <Label>Nama</Label>
              <Input disabled>{this.state.user.nama}</Input>
            </Item>
            <Item stackedLabel>
              <Label>Nomor Telpon</Label>
              <Input disabled>{this.state.user.notelp}</Input>
            </Item>
            <Item stackedLabel>
              <Label>Alamat</Label>
              <Input disabled>{this.state.user.alamat}</Input>
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
