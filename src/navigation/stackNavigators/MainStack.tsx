import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from 'src/screens/Main';

const Stack = createNativeStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName="Main">
    <Stack.Screen
      name="Main"
      component={MainScreen}
      options={{
        headerTitleAlign: 'left',
        headerTitle: '',
      }}
    />
  </Stack.Navigator>
);

export default MainStack;
