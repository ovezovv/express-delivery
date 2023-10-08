import {IconoirProvider} from 'iconoir-react-native';
import React, {memo} from 'react';
import colors from 'src/styles/colors';
import sizing from 'src/styles/sizing';

interface Props {
  focused: boolean;
  icon: JSX.Element;
}

const Icon = ({focused, icon}: Props) => (
  <IconoirProvider
    iconProps={{
      color: focused ? colors.blue[700] : colors.black,
      strokeWidth: 1,
      width: sizing.s3,
      height: sizing.s3,
    }}>
    {icon}
  </IconoirProvider>
);

const TabBarIcon = memo(Icon, () => true);

TabBarIcon.displayName = 'TabBarIcon';

export default TabBarIcon;
