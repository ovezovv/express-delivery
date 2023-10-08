import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import BackButton from 'src/components/templates/BackButton';
import styles from 'src/styles';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');

  return (
    <View style={styles.screenContainer}>
      <BackButton onPress={() => console.log('sdf')} />
      <View style={styles.loginScreenContainer}>
        <Text style={styles.loginScreenTitle}>Добро пожаловать!</Text>
        <Text style={styles.loginScreenDesc}>
          Введите номер телефона, чтобы войти или зарегистрироваться
        </Text>
        <MaskInput
          value={phone}
          onChangeText={masked => {
            setPhone(masked);
            console.log(phone);
          }}
          mask={[
            '+',
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
            ' ',
            /\d/,
            /\d/,
          ]}
          style={styles.loginScreenInput}
          keyboardType="phone-pad"
          dataDetectorTypes="phoneNumber"
          placeholder="+7"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
