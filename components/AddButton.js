import * as React from 'react';
import { Text, View, StyleSheet, Icon, Platform } from 'react-native';

export default class AddButton extends React.Component {

  render() {
    if (Platform.OS === 'ios'){
      
      return ( 
          <View style = {styles.addButtonPositionIos}>
            <View style = {styles.addButtonIos}>
              <Text style = {styles.styleTextIos}>+</Text>
            </View>
          </View>
    );
  }else{
    return (
          <View style = {styles.addButtonPositionAndroid}>
            <View style = {styles.addButtonAndroid}>
              <Text style = {styles.styleTextAndroid}>+</Text>
            </View>
          </View>
          );
  }
  }
}

const styles = StyleSheet.create({
  addButtonAndroid: {
    backgroundColor: '#2398AB', 
    borderRadius: 100,
    paddingHorizontal: 2.3,
    paddingBottom: 2
    
  },
  addButtonPositionAndroid: {
    marginTop: -18,
    marginLeft: 44,
    marginVertical: 5.5
  },
  styleTextAndroid:{
    color: 'white',
    fontSize: 17,
    marginVertical: -5,
    alignSelf: 'center'
  },
  addButtonIos: {
    backgroundColor: '#1771F1', 
    borderRadius: 100,
    paddingBottom: 3.2,
    paddingHorizontal: 1
  },
  addButtonPositionIos: {
    marginTop: -18,
    marginLeft: 46,
    marginVertical: 5.6
  },
  styleTextIos:{
    color: 'white',
    fontSize: 18.5,
    marginVertical: -5,
    alignSelf: 'center'
  }
});