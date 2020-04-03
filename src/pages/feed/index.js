import React, { Component } from 'react';
import {StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, Image, SafeAreaView, ScrollView, NatvigationsEvents} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

export default class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed',
  }

  constructor(props){
    super(props);
    this.state = {
      isLoading : true,
      post : [],
    }

    this.getItems();
  }
  
  
  async getItems(){
    fetch('http://192.168.25.3:3000/posts')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading : false,
        post : responseJson,
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
          <TouchableOpacity onPress= {()=>this.props.navigation.navigate('OutrasPostagens', {id: null, linkfotoperfil: '', nome: '', descricaodopost: '', imagemdopost: ''})}>
            <Text style={styles.adicionar_Postagem}>Adicionar Postagem</Text>
          </TouchableOpacity>
          {
          this.state.post.map((item) =>{
            return (
                <TouchableOpacity key={item.id} onPress= {()=>this.props.navigation.navigate('OutrasPostagens', {id: item.id, nome: item.nome,  linkfotoperfil: item.linkfotoperfil, descricaodopost: item.descricaodopost, imagemdopost: item.imagemdopost})}>
                  <View style = {styles.header_post}> 
                    <Image source = {{uri: item.linkfotoperfil}} style = {styles.image_perfil_size}/>

                    <View style = {{flex: 1}}>
                      <View style = {{paddingLeft : 7}}>
                        <Text style = {styles.title_post}>{item.nome}</Text>
                      </View>
                    
                      <View style = {styles.desciption_position}>
                        <Text style = {styles.desciption_post}>{item.descricaodopost}</Text>
                      </View>    
                    </View>
                        
                    <TouchableOpacity style = {styles.more_post_option_position}>
                      <Icon name="more-horizontal" color="black" size={19}/>
                    </TouchableOpacity>
                  </View>
                
                  <TouchableOpacity>
                    <Image source = {{uri: item.imagemdopost}} style = {styles.image_post_size}/> 
                  </TouchableOpacity>

                  <View style = {{padding: 20}}/>
                  <View style = {styles.line}/>
                </TouchableOpacity>
            )
          }, {props: this.props})
          }
          <View style = {{padding: 39}}/>
      </View>
    );

  }

}

const styles = StyleSheet.create({
  image_perfil_size: {
    height: 50,
    width: 50,
    borderRadius: 100
  },

  title_post: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  desciption_post: {
    fontSize: 11,
    paddingLeft: 5
  },

  more_post_option_position:{
    flexDirection: 'row-reverse',
    marginEnd: 12,
  },

  image_post_size : {
    height: 310,
    width: '100%',
    
  },

  header_post: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    marginHorizontal: 7,
    
  },

  line : {
    padding: 0.4,
    width: '100%',
    backgroundColor: '#F1F2F2',
  },

  adicionar_Postagem: {
    marginTop: 12, 
    borderRadius: 100, 
    backgroundColor: '#2398AB', 
    padding: 20, 
    fontSize: 20, 
    alignSelf: 'center', 
    color: 'white'
  },
  
})