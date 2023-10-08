type TabNavStacks = 'MainStack';

type LaunchStackGraph = {
  MainStack: undefined;
  Login: undefined;
};

type TabBarIcon = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => ReactNode;
