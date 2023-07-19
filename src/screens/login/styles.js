import {Dimensions, StyleSheet, Platform} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { colors } from '../../constants/colors';

var height = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  loginContainer: {
    paddingHorizontal: scale(20),
    flexGrow: 1,
    backgroundColor: colors.white,
    paddingVertical: height / verticalScale(7),
  },
  title: {
    fontFamily: 'bold',
    marginRight: scale(100),
    fontSize: scale(40),
    marginBottom: verticalScale(15),
    color: colors.black
  },
  text: {
    fontSize: scale(20),
    fontFamily: 'medium',
    color: colors.textGrey,
  },
  form: {
    paddingTop: scale(25),
  },
  inputGroup: {
    marginBottom: scale(28),
  },
  label: {
    fontFamily: 'medium',
    fontSize: scale(14),
    color: colors.textGrey,
  },
  input: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: scale(1),
    paddingHorizontal: 0,
    paddingVertical:
      Platform.OS === 'ios' ? verticalScale(15) : verticalScale(13),
    marginHorizontal: 0,
    color: colors.primary,
    fontSize: scale(14),
  },
  passwordText: {
    fontFamily: 'medium',
    marginBottom: scale(15),
  },
  signupView: {
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
    paddingBottom: verticalScale(20),
  },
  signupText: {
    fontSize: scale(15),
    fontFamily: 'medium',
    paddingTop: verticalScale(25),
  },
  buttonContainer: {
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(15),
    borderRadius: 0,
  },
  buttonContainerStyle: {
    // borderRadius: 10,
  },
  buttonText: {
    fontFamily: 'medium',
    fontSize: scale(18),
  },
  errorMsg: {
    paddingTop: 8,
    color: 'red',
    fontFamily: 'semibold',
    fontSize: scale(12),
  },
});
