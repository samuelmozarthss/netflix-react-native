import React, {useEffect} from 'react';
import {Alert} from 'react-native';

import Home from './screen/Home';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return <Home />;
};
export default App;
