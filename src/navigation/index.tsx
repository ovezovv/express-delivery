import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from 'src/screens/Welcome';

const Root = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Root;
