import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  loginTop: {
    alignItems: 'center',
    marginTop: hp('5'),
    marginBottom: hp('4'),
  },
  mainImage: {
    width: wp('100'),
    height: hp('40'),
  },
  logo: {
    width: wp('60'),
    height: hp('9'),
  },
  signInText: {
    textAlign: 'center',
    marginTop: hp('1'),
    fontSize: hp('1.8'),
  },
  rememberInner: {
    flexDirection: 'row',
    marginTop: hp('1'),
    flex: 1,
    marginBottom: hp('3.5'),
    alignItems: 'center',
  },
  tickIcon: {
    marginRight: wp('2'),
    resizeMode: 'contain',
    height: hp('3'),
    width: wp('6'),
  },
  tickText: {
    color: Colors.gray,
    fontSize: hp('1.9'),
    fontWeight: '400',
    // marginBottom: hp('1'),
  },
  logInMain: {
    flexGrow: 1,
    paddingHorizontal: wp('3.5'),
    paddingTop: hp('3'),
    paddingBottom: hp('6'),
  },
  buttonStyle: {
    // marginTop: hp('3'),
  },
  lockstyle: {
    flex: 0.5,
  },
  firstNameStyle: {
    width: wp('44.5'),
    marginRight: wp('4'),
  },
  nameStyle: {
    width: wp('44.5'),
  },
  userIconStyle: {
    flex: 2,
  },
  userInputStyle: {
    width: '83%',
  },
  dontHave: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('3'),
    marginBottom: hp('1'),
  },
  dontHaveText: {
    fontSize: hp('1.9'),
    fontWeight: '400',
    color: Colors.black,
    marginRight: wp('4'),
  },
  signUpText: {
    color: Colors.primaryColor,
    fontSize: hp('1.9'),
  },
  lastNameSt: {
    // position: 'absolute',
    right: wp('0'),
  },
});
