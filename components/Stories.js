import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView} from 'react-native';

let ownerUserPhoto = 'https://i.mdel.net/i/db/2017/4/689126/689126-500w.jpg';

import AddButton from './AddButton';

export default class Stories extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      stories: [],
      user_photo: ownerUserPhoto,
    };
    
    this.getItems();
  }

  getItems(){
    fetch('https://5e5998ef6a71ea0014e61a71.mockapi.io/stories')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading : false,
        stories : responseJson,
      });
    }).catch((error) =>{
      alert(error);
    });
  }

  render() {

    if (this.state.isLoading){
       return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <View>
        <ScrollView horizontal={true} style = {{flex : 1}} showsHorizontalScrollIndicator = {false}> 
        <View style = {{flexDirection: 'row', marginVertical: 12, marginHorizontal: 12}}>
        { 
        this.state.stories.map((item) =>{
          if (item.id == 0){
            return (
                <TouchableOpacity  style = {styles.stories_photo_position}>
                  <Image source = {{uri: item.image_user}} style = {styles.stories_photo_size}/>
                  <View>
                    <AddButton/>             
                    <Text style = {styles.size_Text}>Your Story</Text>
                  </View>
                </TouchableOpacity>
  
            )
          } else if (item.id > 0){
            return ( 
                <TouchableOpacity  style = {styles.stories_photo_position}>
                  <Image source = {{uri: item.image_user}} style = {styles.stories_photo_size}/>
                  <View style={{paddingTop: 2}}>
                  <Text style = {styles.size_Text}>{item.name_user}</Text>
                  </View>  
                </TouchableOpacity> 
            )
          }
        })
      } 
        </View>
        </ScrollView>
        <View style = {styles.line}/>
      </View>

    );

  }
}

const styles = StyleSheet.create({
  stories_photo_size : {
    height: 50,
    width: 50,
    borderRadius: 100
  },
  stories_photo_position : {
    flexDirection: 'column', 
    paddingRight: 18, 
    alignItems: 'center',
  },
  line : {
    padding: 0.4,
    backgroundColor: '#F1F2F2',
    flex: 1,
    marginTop: -7
  },
  size_Text : {
    fontSize: 12,
  
  },

});
