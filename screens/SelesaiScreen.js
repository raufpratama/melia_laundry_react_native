/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert
} from 'react-native';
import { List, ListItem, Left, Body, Right, Text,Content, Thumbnail, Button } from 'native-base';
import {dataselesailaundry} from '../components/data';

export default class SelesaiScreen extends Component {
  _klik = (judullist) => alert(`you are clicking on ${judullist}`);
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataselesailaundry}
          renderItem={({item})=> (
            <List>
              <ListItem button avatar onPress={()=>this._klik(item.paket)}>
                  <Left>
                    <Thumbnail source={{uri:item.uri}}/>
                  </Left>
                  <Body>
                    <Text>{item.paket}</Text>
                    <Text style={styles.sub_title}>Selesai : {item.selesai}</Text>
                    <Text style={styles.sub_title}>{item.totalharga}</Text>
                    <Text style={styles.sub_title}>Pesan : {item.pesan}</Text>
                  </Body>
              </ListItem>
            </List>
          )}
          keyExtractor={(item, index) => index}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sub_title : {
    fontSize: 13,
    color:'#c2c2c2'
  }
});
