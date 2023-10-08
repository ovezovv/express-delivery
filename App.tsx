import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {enableFreeze} from 'react-native-screens';
import {RecoilRoot} from 'recoil';
import RootTabs from 'src/navigation';

/** ReactNative Screens */
enableFreeze(true);

const App = () => (
  <RecoilRoot>
    <NavigationContainer>
      <SafeAreaProvider>
        <RootTabs />
      </SafeAreaProvider>
    </NavigationContainer>
  </RecoilRoot>
);

export default App;
