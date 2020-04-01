import React, { Component, useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class Explorar extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.flex}>
          <Icon
            style={styles.searchIcon}
            name="search1"
            size={20}
            color="#424242"
          />
          <TextInput style={styles.input} placeholder="Pesquisar" />
          <Text style={styles.cancel}>Cancel</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15
  },
  searchIcon: {
    padding: 8.5,
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8
  },
  cancel: {
    fontSize: 18,
    fontWeight: '600'
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    width: 300,
    height: 40,
    backgroundColor: '#F5F5F5',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    marginRight: 20
  }
});
