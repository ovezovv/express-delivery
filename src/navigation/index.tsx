import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from 'iconoir-react-native';
import React, {ComponentType} from 'react';
import {useRecoilValue} from 'recoil';
import atoms from 'src/lib/recoil/atoms';
import LaunchStack from 'src/navigation/stackNavigators/LaunchStack';
import MainStack from 'src/navigation/stackNavigators/MainStack';
import colors from 'src/styles/colors';
import fonts from 'src/styles/fonts';
import TabBarIcon from './templates/TabBarIcon';

const Tab = createBottomTabNavigator();

type Screen = {
  name: string;
  title: string;
  component: ComponentType;
  icon: JSX.Element;
};
const screens: Screen[] = [
  {
    name: 'MainStack',
    title: 'Main',
    component: MainStack,
    icon: <Home />,
  },
];

const RootTabs = () => {
  const profile = useRecoilValue(atoms.profile);

  return profile !== null ? (
    <Tab.Navigator initialRouteName="MainStack">
      {screens.map(screen => {
        const tabBarIcon: TabBarIcon = ({focused}) => (
          <TabBarIcon focused={focused} icon={screen.icon} />
        );

        return (
          <Tab.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
            options={{
              tabBarLabel: screen.title,
              tabBarLabelStyle: {
                fontFamily: fonts.Lato,
                fontSize: 10,
              },
              tabBarInactiveTintColor: colors.black,
              tabBarIcon,
            }}
          />
        );
      })}
    </Tab.Navigator>
  ) : (
    <LaunchStack />
  );
};

export default RootTabs;
