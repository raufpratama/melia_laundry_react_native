/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  Button,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {ButtonSquare,ButtonCircle,TextView} from '../components/button';
import {TextBox,TextBoxIcon} from '../components/textBox';
import {CheckBox} from 'react-native-elements';

export default class SignUpScreen extends Component {
  state = {
    checked:false,
    bt_disable:true,
    modal:false,
    username:'',
    email:'',
    notelp:'',
    password:'',
    confpass:'',
    alamat:'',                
  }

  _klik = (keterangan) => Alert.alert(keterangan);

  _formCondition = () => {
    const form = this.state;
    if(form.username.length > 0 && form.email.length > 0 && form.notelp.length > 0
        && form.password.length > 0 &&form.confpass.length > 0 && form.alamat.length > 0) {
          if(form.password == form.confpass) {
            this._klik('berhasil')
          } else {
            this._klik('password tidak sinkron')
            return false
          }
    } else {
      this._klik('data tidak boleh kosong')
      return false;
    }
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={{flex:1,alignItems: 'center',width: '100%'}}>
          <Text style={styles.screen_title}>Daftar</Text>
          <Text style={styles.screen_subtitle}>lengkapi form anda disini</Text>
          <TextBoxIcon
            marginTop={40}
            method={(e)=> this.setState({username:e})}
            icon='person'
            backgroundColor='#FB8C00'
            placeholder='Nama pengguna'
            place_color='#ffff'
            width='80%'
          />
          <TextBoxIcon
            marginTop={20}
            icon='email'
            method={(e)=> this.setState({email:e})}
            backgroundColor='#FB8C00'
            placeholder='Email'
            place_color='#ffff'
            text_content='email-address'
            width='80%'
          />
          <TextBoxIcon
            marginTop={20}
            icon='call'
            method={(e)=> this.setState({notelp:e})}
            backgroundColor='#FB8C00'
            placeholder='No. Telepon'
            place_color='#ffff'
            text_content='phone-pad'
            width='80%'
            maxLength={12}
          />
          <TextBoxIcon
            marginTop={20}
            icon='lock'
            method={(e)=> this.setState({password:e})}
            backgroundColor='#FB8C00'
            placeholder='Kata sandi'
            place_color='#ffff'
            width='80%'
            password={true}
          />
          <TextBoxIcon
            marginTop={20}
            icon='lock'
            method={(e)=> this.setState({confpass:e})}
            backgroundColor='#FB8C00'
            placeholder='Konfirmasi kata sandi'
            place_color='#ffff'
            width='80%'
            password={true}
          />
          <TextBoxIcon
            marginTop={20}
            icon='home'
            method={(e)=> this.setState({alamat:e})}
            backgroundColor='#FB8C00'
            placeholder='Alamat'
            place_color='#ffff'
            width='80%'
          />
          <CheckBox
            title='Agree Term and Conditions'
            checked={this.state.checked}
            onPress={()=>this.setState({checked:!this.state.checked,bt_disable:!this.state.bt_disable})}
            size={15}
            textStyle={{color:'#ffff', fontSize: 12,fontWeight: 'normal'}}
            containerStyle={{backgroundColor: null,borderWidth: 0,marginTop: 20}}
          />
          <View style={{width:'80%'}}>
            <Button
              title='Daftar'
              onPress={this._formCondition}
              disabled={this.state.bt_disable}
              color='#D32F2F'
            />
          </View>
          <Modal
            animationType='slide'
            visible={this.state.modal}
            transparent={false}
            onRequestClose={()=>Alert.alert('closed')}
            >
            <View style={{padding:15}}>
              <TouchableOpacity onPress={()=>this.setState({modal:!this.state.modal})}>
                <Text>Halo dunia</Text>
              </TouchableOpacity>
            </View>
          </Modal>
          <TextView
            method={()=>this.setState({modal:!this.state.modal})}
            title='Term and Conditions'
            textColor='#ffff'
            marginTop={20}
            />
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F57C00',
    flexDirection: 'column',
    alignItems: 'center',
    padding:15,
  },
  screen_title:{
    fontWeight: 'bold',
    color:'#ffff',
    fontSize: 30,
    fontFamily: 'Roboto',
  },
  screen_subtitle : {
    fontSize: 15,
    fontFamily: 'Roboto',
    color: '#ffff'
  }
});
