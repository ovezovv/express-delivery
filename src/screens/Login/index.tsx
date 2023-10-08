import React from 'react';
import {Text, TextInput, View} from 'react-native';
import BackButton from 'src/components/templates/BackButton';
import styles from 'src/styles';

const LoginScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <BackButton onPress={() => console.log('sdf')} />
      <View style={styles.loginScreenContainer}>
        <Text style={styles.loginScreenTitle}>Добро пожаловать!</Text>
        <Text style={styles.loginScreenDesc}>
          Введите номер телефона, чтобы войти или зарегистрироваться
        </Text>
        <TextInput
          style={styles.loginScreenInput}
          keyboardType="phone-pad"
          dataDetectorTypes="phoneNumber"
          maxLength={14}
          placeholder="+7"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
