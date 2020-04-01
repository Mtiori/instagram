import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import IconCheio from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import Feed from '../pages/feed';
import AddPhoto from '../pages/addPhoto';
import NotificationScreen from '../pages/notification';
import Search from '../pages/search';
import Profile from '../pages/profile';
import Post from '../pages/post';

export default class Routes extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <TabNavigator />
      </SafeAreaView>
    );
  }
}

const FeedStack = createStackNavigator({
  Feed: Feed,
  Post: Post
})

const TabNavigator = createAppContainer(
  createMaterialTopTabNavigator(
    {
      Feed: {
        screen: FeedStack,
        navigationOptions: {
          tabBarIcon: () => <Icon name="home" size={25} color="#000" />
        }
      },
      Search: {
        screen: Search,
        navigationOptions: {
          tabBarIcon: () => <Icon name="search1" size={25} color="#000" />
        }
      },
      AddPhoto: {
        screen: AddPhoto,
        navigationOptions: {
          tabBarIcon: () => <Icon name="plussquareo" size={25} color="#000" />
        }
      },
      Notification: {
        screen: NotificationScreen,
        navigationOptions: {
          tabBarIcon: () => <Icon name="hearto" size={25} color="#000" />
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return <IconCheio name="user" size={30} color="#000" />;
            }
            return <IconCheio name="user-o" size={25} color="#000" />;
          }
        }
      }
    },
    {
      tabBarPosition: 'bottom',
      initialRouteName: 'Feed',

      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#fafafa'
        },
        labelStyle: {
          textAlign: 'center'
        },
        indicatorStyle: {
          borderBottomColor: '#fafafa',
          borderBottomWidth: 2
        }
      }
    }
  )
);
