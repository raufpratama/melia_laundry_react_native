/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { List, ListItem, Left, Body, Right, Text, Thumbnail } from 'native-base';
import {dataproseslaundry} from '../components/data';

export default class ProsesScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={dataproseslaundry}
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
