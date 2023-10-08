import {atom} from 'recoil';
import defaultAtoms from 'src/lib/recoil/defaultAtoms';
import effects from 'src/lib/recoil/effects';

const activeTabNavigator = atom<TabNavStacks>({
  key: 'activeTabNavigator',
  default: defaultAtoms.activeTabNavigator,
});

const profile = atom<User.Profile | null>({
  key: 'profile',
  default: defaultAtoms.profile,
  effects: [effects.profilePersistEffect('profile')],
});

export default {
  activeTabNavigator,
  profile,
};
