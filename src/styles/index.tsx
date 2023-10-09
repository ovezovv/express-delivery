import {Platform, StyleSheet, ViewStyle} from 'react-native';

import colors from 'src/styles/colors';
import fonts from 'src/styles/fonts';
import sizing from 'src/styles/sizing';
import theme from 'src/styles/theme';

const iOs = Platform.OS === 'ios';
// const android = Platform.OS === 'android'

export const platformStyle = {
  loginConfirmationHeight: iOs ? 130 : 150,
};

const styles = StyleSheet.create({
  /**
   * Launch Screen
   */
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  launchScreenContainer: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizing.s2,
  },
  launchScreenTitle: {
    color: colors.white,
    fontFamily: fonts.Lato,
    fontSize: 38,
    fontWeight: '600',
    lineHeight: 38,
  },
  launchScreenTitlePart: {
    fontSize: 30,
    lineHeight: 33,
  },
  launchScreenDesc: {
    marginTop: 12,
    fontFamily: fonts.Lato,
    color: colors.gray[100],
    fontSize: 16,
    lineHeight: 20,
  },
  launchScreenButton: {
    marginTop: 40,
    padding: 16,
    borderColor: '#c2c2c2',
    borderWidth: 1,
    borderRadius: 1230,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#00000020',
  },

  /**
   * Login Screen
   */

  loginScreenContainer: {
    marginTop: 20,
    paddingVertical: 5,
  },

  loginScreenTitle: {
    fontFamily: fonts.Lato,
    fontSize: 28,
    lineHeight: 36,
    fontWeight: '600',
    color: '#161616',
  },

  loginScreenDesc: {
    marginTop: 8,
    fontFamily: fonts.Lato,
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
    color: '#868B99',
  },

  loginScreenInput: {
    marginTop: 20,
    height: 56,
    width: '100%',
    backgroundColor: '#EDEDF4',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontFamily: 'Lato',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },

  loginScreenInputError: {
    marginTop: 20,
    height: 56,
    width: '100%',
    backgroundColor: '#EDEDF4',
    borderRadius: 12,
    borderColor: '#E93963',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
    fontFamily: 'Lato',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '400',
  },

  loginScreenError: {
    color: '#E93963',
    fontFamily: fonts.Lato,
  },

  sendOTPButtonActive: {
    marginTop: sizing.s2,
    padding: sizing.s2,
    borderRadius: 1230,
    width: '100%',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },

  sendOTPButtonDisabled: {
    marginTop: sizing.s2,
    padding: sizing.s2,
    borderRadius: 1230,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#AFC0ED',
  },

  /**
   * Generals
   */

  screenContainer: {
    padding: sizing.s2,
    paddingTop: 70,
  },

  backButton: {
    height: 50,
    width: 50,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#252D73',
    shadowRadius: 10,
    shadowOpacity: 0.07,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },

  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: sizing.fsh.height / 7,
  },

  /**
   * Empty Screen
   */
  emptyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyScreenTextContainer: {
    alignItems: 'center',
    width: sizing.ww / 1.5,
  },
  emptyScreenTitle: {
    fontSize: theme.fontSizeLarge,
    fontFamily: fonts.LatoBold,
    color: colors.black,
    textAlign: 'center',
    marginTop: sizing.s2,
  },
  emptyScreenDescription: {
    fontSize: theme.fontSizeSmall,
    color: colors.blackish,
    textAlign: 'center',
    marginTop: sizing.s1,
    lineHeight: 18,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: theme.borderRadiusLarge,
    borderColor: '#ddd',
    color: colors.black,
    ...sizing.p2,
  },
  formInputMultiline: {
    minHeight: 80,
  },
  formInputWithoutPadding: {
    padding: 0,
  },
  formInputError: {
    borderColor: colors.red,
  },
  formInputErrorCaption: {
    fontSize: theme.fontSizeSmall,
    color: colors.red,
    marginTop: sizing.s1,
  },
  formInputDisabled: {
    backgroundColor: '#ddd',
  },
  formButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  formButton: {
    backgroundColor: colors.primary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    ...sizing.pv2,
    ...sizing.ph3,
  },
  formButtonDisabled: {
    opacity: 0.5,
  },
  formButtonSecondary: {
    backgroundColor: colors.lightGray,
    marginRight: 10,
  },
  formButtonText: {
    color: colors.black,
  },
  formButtonLoader: {
    marginLeft: 10,
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexItemsCenter: {
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowBetweenCentered: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexJustifyBetween: {
    justifyContent: 'space-between',
  },
  flexJustifyAround: {
    justifyContent: 'space-around',
  },
  flexJustifyCenter: {
    justifyContent: 'center',
  },
  flexSelfStrech: {
    alignSelf: 'stretch',
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  textTitle: {
    fontSize: theme.fontSizeExtraLarge,
    color: colors.primaryText,
    fontFamily: fonts.Lato,
    borderRadius: theme.borderRadiusLarge,
  },
  textCaption: {
    fontSize: theme.fontSizeSmall,
    color: colors.darkestGray,
  },
  textSmall: {
    fontSize: theme.fontSizeSmall,
  },
  textNormal: {
    fontSize: theme.fontSizeNormal,
  },
  textLarge: {
    fontSize: theme.fontSizeLarge,
  },
  textBold: {
    fontWeight: 'bold',
  },
  textSemiBold: {
    fontWeight: '600',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
  textDanger: {
    color: colors.red,
  },
  buttonText: {
    fontWeight: 'bold',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  borderDefault: {
    borderWidth: 1,
    borderColor: colors.darkGray,
  },
  borderError: {
    borderWidth: 1,
    borderColor: colors.red,
  },
  absolute: {
    position: 'absolute',
  },
});

export default styles;

export const textColor = (value: string) => ({color: value});
export const textFont = (value: string) => ({fontFamily: value});
export const bgColor = (value: string) => ({backgroundColor: value});
export const borderRadius = (value: number) => ({borderRadius: value});
export const borderColor = (value: string) => ({borderColor: value});
export const borderWidth = (value: number) => ({borderWidth: value});
export const opacity = (value: number) => ({opacity: value});
export const marginInverse = (value: number) => ({margin: -Math.abs(value)});
export const marginTop = (value: number) => ({marginTop: value});
export const marginRight = (value: number) => ({marginRight: value});
export const marginBottom = (value: number) => ({marginBottom: value});
export const marginLeft = (value: number) => ({marginLeft: value});
export const width = (value: number | string) => ({width: value});
export const display = (shouldDisplay: boolean): ViewStyle => ({
  display: shouldDisplay ? 'flex' : 'none',
});
export const aspectRatio = (value: number) => ({aspectRatio: value});
export const paddingBottom = (value: number) => ({paddingBottom: value});
export const top = (value: number) => ({top: value});
export const right = (value: number) => ({right: value});
export const bottom = (value: number) => ({bottom: value});
export const left = (value: number) => ({left: value});
export const alignItems = (value: string) => ({alignItems: value});
export const justifyContent = (value: string) => ({justifyContent: value});
