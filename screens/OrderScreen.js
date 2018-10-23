/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar
} from 'react-native';
import { Options } from '../components/toolbar';
import { List, ListItem, Thumbnail, Left, Right, Body, Header, Item, Icon, Title, Button, Input } from 'native-base';
import Counter from '../components/counter';

export default class OrderScreen extends Component {
  state = {
    searchh:true,
    focusInput:false,
    header: (
      <Header style={{backgroundColor: '#F57C00'}}>
        <Left style={{flex:2}}>
        </Left>
        <Body style={{flex:1}}>
          <Title style={{fontWeight: 'bold'}}>ORDER</Title>
        </Body>
        <Right style={{flex:2}}>
          <Button onPress={()=>{this.setState({searchh:!this.state.searchh})}} transparent>
            <Icon name='search'/>
          </Button>
          <Button transparent>
            <Options icon={<Icon name='more'/>} methodLogout={this._klik}/>
          </Button>
        </Right>
      </Header>
    ),
    searchHeader:(
                        <Header searchBar rounded style={{backgroundColor: '#F57C00'}}>
                          <Item>
                            <Button style={{marginBottom: 5}} transparent onPress={()=>this.setState({searchh:true})}>
                              <Icon name='arrow-back'/>
                            </Button>
                            <Input placeholder="Search"/>
                            <Icon name="shirt" />
                          </Item>
                        </Header>
                      )
  }

  _klik() {
    alert('crot');
  }

  _searchPress = () => this.setState({searchh:false});

  render() {
    const stt = this.state;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F57C00' barStyle='light-content'/>
        {stt.searchh ? stt.header : stt.searchHeader}
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail source={require('../img/jas.png')}/>
            </Left>
            <Body>
              <Text style={{fontWeight: 'bold',color: 'black',fontSize: 16}}>Jas</Text>
              <Text note>Reguler : IDK 23.000,-</Text>
              <Text note>One Day : IDK 40.000,-</Text>
            </Body>
            <Right>
              <Counter/>
            </Right>
          </ListItem>
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
