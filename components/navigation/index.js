import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

export default () => {
  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};
