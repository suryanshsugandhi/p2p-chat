import React from 'react';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import Home from '../screens/Home';
import Chat from '../screens/Chat';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerLeft: HeaderBackButton,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
