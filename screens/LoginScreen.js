import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, Alert, ScrollView, StatusBar, Switch, AsyncStorage } from 'react-native';
import { TextBox, TextBoxIcon } from '../components/textBox';
import axios from 'axios';
import { ButtonCircle, ButtonSquare, TextView } from '../components/button';
import {data_user} from '../components/data';

export default class LoginScreen extends Component {
  state = {
    nama_user:'',
    password_user:'',
  }
  _klik = () => {
    Alert.alert('Klik!');
  }

  _loginAxios = () => {
    if(this.state.nama_user.length > 0 && this.state.password_user.length >0){
      axios.post('http://10.0.3.2:5000/getdata', {
        username:this.state.nama_user,
        password:this.state.password_user
      })
      .then(async(response)=> {
        try {
          const usertoken = await AsyncStorage.setItem('usertoken',JSON.stringify(response));
          this.props.navigation.navigate('App');
        } catch(err) {
          alert(`terjadi error ${err}`);
        }
      })
      .catch(err=>alert(`terjadi error ${err}`));
    } else {
      alert('Username/Password salah');
    }
  }

  _loginAuth = async() => {
    if(this.state.nama_user.length > 0 && this.state.password_user.length >0){
      if(this.state.nama_user == data_user.user && this.state.password_user == data_user.pass) {
        try {
          const usertoken = await AsyncStorage.setItem('usertoken',JSON.stringify(data_user));
          this.props.navigation.navigate('App');
        } catch(err) {
          console.log(err.message);
        }
      } else {
        ToastAndroid.show('Gagal',ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show('Gagal',ToastAndroid.SHORT);
    }
  }

  render(){
    const navigate = this.props.navigation;
    return(
        <View style={styles.container}>
          <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
          <Text style={styles.text_header}>Selamat Datang, di</Text>
          <Image source={require('../img/logo_new.png')} style={styles.image_}/>
          <TextBoxIcon icon='person' method={(e)=>this.setState({nama_user:e})} placeholder='Nama pengguna' width='80%' backgroundColor='#FB8C00' marginTop={70} place_color='#ffff'/>
          <TextBoxIcon icon='lock' method={(e)=>this.setState({password_user:e})} placeholder='Kata sandi' width='80%' backgroundColor='#FB8C00' marginTop={20} place_color='#ffff' password={true}/>
          <ButtonSquare method={this._loginAxios} width='80%' title='MASUK' marginTop={40} textColor='#ffff' backgroundColor='#D32F2F'/>
          <TextView method={()=> this.props.navigation.navigate('SignUp')} title="Tidak punya akun ? daftar disini" textColor='#ffff' marginTop={60}/>
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
    height: 74,
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
