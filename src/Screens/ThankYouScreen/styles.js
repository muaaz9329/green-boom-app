import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  thumbImg: {
    width: wp('40'),
    height: hp('20'),
    resizeMode: 'contain',
  },
  title: {
    fontSize: hp('3'),
    color: Colors.themeRed,
    fontWeight: '500',
    marginTop: hp('2'),
  },
  subTitle: {
    fontSize: hp('1.8'),
    color: Colors.gray,
    lineHeight: 20,
    marginTop: hp('1'),
    textAlign: 'center',
    paddingHorizontal: wp('15'),
  },
  btnMain: {
    position: 'absolute',
    bottom: 40,
  },
  btnstyle: {
    flexDirection: 'row',
  },
  btnImg: {
    width: wp('5.7'),
    height: hp('2.7'),
    resizeMode: 'contain',
    marginRight: wp('2'),
  },
  btnText: {
    fontSize: hp('1.8'),
    color: Colors.themeRed,
  },
});
