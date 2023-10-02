import {View, Text} from 'react-native';
import React from 'react';
import Splash from './normal/Splash';
import Parent from './normal/Parent';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Parent"
          component={Parent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
  );
};

export default AppNavigator;