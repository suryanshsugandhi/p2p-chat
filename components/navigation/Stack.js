import React from 'react';
import Home from '../screens/Home';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import CreateRoom from '../screens/CreateRoom';
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
      <Stack.Screen name="Create" component={CreateRoom} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};
