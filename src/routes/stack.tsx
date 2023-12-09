import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/login';
import HomeScreen from '../pages/home';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
