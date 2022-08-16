import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Step1Screen from '../screens/Step1Screen';
import Step2Screen from '../screens/Step2Screen';
import Step3Screen from '../screens/Step3Screen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Step1Screen} />
      <Stack.Screen name="Notifications" component={Step2Screen} />
      <Stack.Screen name="Profile" component={Step3Screen} />
    </Stack.Navigator>
  );
};
