import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import Home from './screen/Home';
import More from './screen/More';
import ProfileToEdit from './screen/ProfileToEdit';

import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="More" component={More} />
      <Tab.Screen name="ProfileToEdit" component={ProfileToEdit} />
    </Tab.Navigator>
  );
}

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen name="More" component={More} />
        <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
