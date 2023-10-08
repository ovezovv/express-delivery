import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {RecoilRoot} from 'recoil';
import Root from './src/navigation';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <SafeAreaView>
          <Root />
        </SafeAreaView>
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
