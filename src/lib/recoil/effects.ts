import AsyncStorage from '@react-native-async-storage/async-storage';
import {AtomEffect} from 'recoil';

type ProfilePersistEffect = AtomEffect<User.Profile | null>;
const profilePersistEffect =
  (key: string): ProfilePersistEffect =>
  ({setSelf, onSet}) => {
    const loadPersisted = async () => {
      const savedValue = await AsyncStorage.getItem(key);

      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
    };

    loadPersisted();

    onSet(newValue => {
      AsyncStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export default {
  profilePersistEffect,
};
