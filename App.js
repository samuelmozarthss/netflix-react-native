import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import Tabs from './routes/Tabs';

import ProfileToEdit from './screen/ProfileToEdit';
import ChooseIcon from './screen/ChooseIcon';
import Camera from './screen/Camera';

import messaging from '@react-native-firebase/messaging';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
        <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
