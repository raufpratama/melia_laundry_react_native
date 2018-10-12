import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Alert, ScrollView, StatusBar, Switch } from 'react-native';
import { TextBox } from './components/textBox';
import { ButtonCircle, ButtonSquare, TextView } from './components/button';

export default class App extends Component {
  _klik = () => {
    Alert.alert('Klik!');
  }

  render(){
    return(
        <View style={styles.container}>
          <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
          <Text style={styles.text_header}>Selamat Datang, di</Text>
          <Image source={require('./img/logo_new.png')} style={styles.image_}/>
          <TextBox placeholder='Nama pengguna' width='80%' marginTop={40} place_color='#ffff'/>
          <TextBox placeholder='Kata sandi' width='80%' marginTop={20} place_color='#ffff' password={true}/>
          <ButtonSquare method={this._klik} width='80%' title='Masuk' marginTop={40} textColor='#ffff'/>
          <TextView method={this._klik} title="Tidak punya akun ? daftar disini" textColor='#ffff' marginTop={60}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    padding:16,
    backgroundColor: '#F57C00'
  },
  image_ : {
    width:160,
    height: 70,
    marginTop: 16,
  },
  text_header: {
    fontFamily: 'Roboto',
    color: '#ffff',
    marginTop: 10,
  },
  googleButton : {
    width:48,
    height:48,
  }
})
