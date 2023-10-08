import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LaunchScreen from 'src/screens/Launch';
import LoginScreen from 'src/screens/Login';

const Stack = createNativeStackNavigator();

const LaunchStack = () => {
  return (
    <Stack.Navigator initialRouteName="Launch">
      <Stack.Screen
        name="Launch"
        component={LaunchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default LaunchStack;
