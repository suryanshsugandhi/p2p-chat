import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './Stack';

export const navigationRef = React.createRef();

export default () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack />
    </NavigationContainer>
  );
};
