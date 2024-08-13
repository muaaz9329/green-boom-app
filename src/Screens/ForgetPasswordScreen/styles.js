import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  passMain: {
    marginVertical: hp('2.5'),
    marginTop: hp('4'),
    paddingHorizontal: wp('4'),
    position: 'relative',
    flex: 1,
    height: hp('70'),
  },
  contactIcon: {
    width: wp('30'),
    height: hp('15'),
    alignSelf: 'center',
    marginBottom: hp('1'),
  },
  lockstyle: {
    flex: 0.5,
  },
  inputStyle: {
    marginTop: hp('3'),
  },

  Cpass: {
    color: Colors.primaryColor,
    fontSize: hp('3.5'),
    fontWeight: 400,
    alignSelf: 'center',
    marginTop: hp('3'),
  },
  CpassSub: {
    color: Colors.gray,
    fontSize: hp('1.8'),
    alignSelf: 'center',
    marginTop: hp('1'),
    marginBottom: hp('3'),
  },
  inputStyle: {
    backgroundColor: Colors.white,
    borderColor: Colors.grayBorder,
    // marginBottom: hp('2'),
  },
  btnMain: {
    marginTop: hp('2'),
  },
});
