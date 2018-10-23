/* @flow */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import OptionsMenu from 'react-native-options-menu';
import { Segment, Button, Tabs, Tab, TabHeading, Text, Header, Left, Right, Body, Title, Container, Icon } from 'native-base';
import { ToolbarHeader } from '../components/toolbar';
import ProsesScreen from './ProsesScreen';
import SelesaiScreen from './SelesaiScreen';

export default class HistoryScreen extends Component {
  _klik = () => alert('crot');

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
        <Container>
          <ToolbarHeader title='PESANAN' methodLogout={this._klik} backgroundColor='#F57C00'/>
          <Tabs>
            <Tab heading={<TabHeading style={{backgroundColor:'#F57C00',borderTopWidth:0}}><Text>Proses</Text></TabHeading>}>
              <ProsesScreen/>
            </Tab>
            <Tab heading={<TabHeading style={{backgroundColor:'#F57C00'}}><Text>Riwayat</Text></TabHeading>}>
              <SelesaiScreen/>
            </Tab>
          </Tabs>
        </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
