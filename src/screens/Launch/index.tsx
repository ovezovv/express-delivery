import React from 'react';
import {ImageBackground, Pressable, Text, View} from 'react-native';
import vectors from 'src/lib/helper/vectors';
import styles from 'src/styles';
import colors from 'src/styles/colors';

const LaunchScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={vectors.vectorPng}
        style={styles.launchScreenContainer}
        resizeMode="contain">
        <Text style={styles.launchScreenTitle}>Приложение</Text>
        <Text style={[styles.launchScreenTitle, styles.launchScreenTitlePart]}>
          для сотрудника
        </Text>
        <Text style={styles.launchScreenDesc}>
          Экспресс-доставка от 20 минут
        </Text>
        <Pressable
          style={styles.launchScreenButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={{color: colors.white}}>Войти</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default LaunchScreen;
