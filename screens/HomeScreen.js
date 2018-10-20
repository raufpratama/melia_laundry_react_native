/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  Platform,
} from 'react-native';
import { Toolbar, Options } from '../components/toolbar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { icon, Header } from 'react-native-elements';

export default class HomeScreen extends Component {
  state = {
    modalisVisible: false,
  }

  _klik = () => {
    alert('klik!');
  }
  render() {
    const klik = this.klik;
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
      <Header
        backgroundColor='#F57C00'
        outerContainerStyles={{height: Platform.OS === 'ios' ? 70 :  70 - 30}}
        placement='left'
        centerComponent={{ text: 'BERANDA', style: { color: '#fff',fontWeight:'bold',fontSize:16 } }}
        rightComponent={<Options methodLogout={this._klik}/>}
        />
        <ScrollView style={{flex:4}}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image source={require('../img/layanan1jam.jpg')} style={styles.img_carousel} resizeMode='stretch'/>
          <Image source={require('../img/layanan1jam2.jpg')} style={styles.img_carousel} resizeMode='stretch'/>
        </ScrollView>
        <View style={styles.bottom_menu}>
          <TouchableOpacity onPress={()=>this.setState({modalisVisible:!this.state.modalisVisible})} style={styles.button_modal_style}>
            <Icon name='expand-less' size={24} color='#c2c2c2'/>
          </TouchableOpacity>
            <Text style={{fontSize: 15,alignSelf: 'center'}}>Silahkan pesan</Text>
        </View>

        <Modal
          animationType='slide'
          transparent={false}
          onRequestClose={()=> console.log('closed')}
          visible={this.state.modalisVisible}
          >
          <View style={{padding:5}}>
            <TouchableOpacity onPress={()=>this.setState({modalisVisible:!this.state.modalisVisible})}>
              <Text>Halo Dunia</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f5f5f5'
  },
  img_carousel: {
    width:Dimensions.get('window').width,
    height: '95%',
    borderRadius: 5,
  },
  bottom_menu : {
    flex:2,
    marginTop: 1,
    borderRadius: 5,
    backgroundColor: '#ffff',
  },
  button_modal_style : {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    marginLeft: '10%',
    marginRight: '10%'
  }
});
