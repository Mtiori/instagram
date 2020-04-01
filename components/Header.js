import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon2 from 'react-native-vector-icons/Feather';


export default class Header extends React.Component {
  render() {
    return (
      <View> 
        <View style = {styles.header}>

          
          <TouchableOpacity style = {styles.header_camera}>
            <Icon name="camera" color = "black" size = {25}/>
          </TouchableOpacity>
          <View style = {styles.header_instagram_position}>
            <Image source = {{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'}} style = {{height: 40, width: 125}} />
          </View>

          <TouchableOpacity style = {styles.header_send}>
            <Icon2 name="send" color="#414042" size={29}/>
          </TouchableOpacity>
        
         
         
         </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header : {
    backgroundColor : '#ffffff',
    paddingTop: '6%',
    paddingBottom: '9%',
    elevation: 0.7,
    borderColor: '#F1F2F2',
    alignItems: 'center',
    flexDirection: 'row'
  },
  header_instagram_position: {
    alignItems: 'center',
    flex:1
  },
  header_camera: {
   paddingStart: 14,
  },
  header_send: {
    paddingEnd: 14
  },
});
