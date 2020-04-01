import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Post extends React.Component {
constructor(props){
  super(props);

  this.state = {
    nome: props.navigation.getParam('nome', 'Vazio')
  }
}


  render() {
    return (
      <View>
        <Text>{this.state.nome}</Text>
      </View>
    );
  }
}
