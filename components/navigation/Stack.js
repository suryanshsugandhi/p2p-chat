import React from 'react';
import {} from 'react-native';
import Home from '../screens/Home';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}></Stack.Screen>
    </Stack.Navigator>
  );
};
