import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import colors from 'src/styles/colors';
import fonts from 'src/styles/fonts';

const stackScreenOptions = (): NativeStackNavigationOptions => {
  StatusBar.setBarStyle('light-content', true);

  return {
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: colors.blue[900],
    },
    headerTintColor: colors.gray[25],
    headerTitleStyle: {
      color: colors.gray[25],
      fontFamily: fonts.Lato,
    },
    headerTransparent: false,
    fullScreenGestureEnabled: true,
  };
};

const rootTabsOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.black,
  tabBarShowLabel: false,
  headerShown: false,
  lazy: true,
  tabBarHideOnKeyboard: true,
};

export default {
  stackScreenOptions,
  rootTabsOptions,
};
