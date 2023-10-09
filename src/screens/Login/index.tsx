import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Formik} from 'formik';
import {Pressable, Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import BackButton from 'src/components/templates/BackButton';
import constants from 'src/lib/constants';
import validations from 'src/lib/helper/validations';
import styles from 'src/styles';
import colors from 'src/styles/colors';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [confirmationResult, setConfirmation] =
    useState<FirebaseAuthTypes.ConfirmationResult>();

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    const payload = await auth().signInWithPhoneNumber(phoneNumber);
    console.log('confirmation', payload);
    setConfirmation(payload);
  };

  const onSubmit = async (phoneNumber: string) => {
    console.log(
      'submitted phone number',
      phoneNumber.replaceAll(' ', ''),
      'verification is started',
    );

    const trimmed = phoneNumber.replaceAll(' ', '');

    const response = await signInWithPhoneNumber(trimmed);

    console.log(response, confirmationResult);
  };

  return (
    <View style={styles.screenContainer}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.loginScreenContainer}>
        <Text style={styles.loginScreenTitle}>Добро пожаловать!</Text>
        <Text style={styles.loginScreenDesc}>
          Введите номер телефона, чтобы войти или зарегистрироваться
        </Text>
        <Formik
          initialValues={{phoneNumber: ''}}
          validationSchema={validations.phoneNumberValidation}
          onSubmit={values => onSubmit(values.phoneNumber)}
          validateOnChange>
          {({handleChange, handleSubmit, values, errors}) => (
            <View>
              <MaskInput
                autoFocus
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onSubmitEditing={() => handleSubmit()}
                mask={constants.phoneNumberMask}
                style={
                  errors.phoneNumber
                    ? styles.loginScreenInputError
                    : styles.loginScreenInput
                }
                keyboardType="phone-pad"
                placeholder="+7"
              />
              {errors.phoneNumber && (
                <Text style={styles.loginScreenError}>
                  Необходимо ввести номер телефона
                </Text>
              )}
              <Pressable
                style={
                  errors.phoneNumber
                    ? styles.sendOTPButtonDisabled
                    : styles.sendOTPButtonActive
                }
                disabled={errors.phoneNumber ? true : false}
                onPress={() => handleSubmit()}>
                <Text style={{color: colors.white}}>Получить код</Text>
              </Pressable>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default LoginScreen;
