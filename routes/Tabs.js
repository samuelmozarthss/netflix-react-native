import React from 'react';

import Home from './../screen/Home';
import More from './../screen/More';
import Doing from './../screen/Doing';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: 'black',
        tabBarInactiveBackgroundColor: 'black',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Doing}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="search1" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Soon"
        component={Doing}
        options={{
          tabBarLabel: 'Soon',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="perm-media" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Doing}
        options={{
          tabBarLabel: 'Downloads',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="download" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <FeatherIcon name="menu" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
