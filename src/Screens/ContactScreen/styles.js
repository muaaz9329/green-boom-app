import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  catMain: {
    marginVertical: hp('2.5'),
    paddingHorizontal: wp('4'),
  },
  contactIcon: {
    width: wp('30'),
    height: hp('15'),
    alignSelf: 'center',
    marginBottom: hp('1'),
  },
  mainContact: {
    flexDirection: 'row',
  },
  separator: {
    borderBottomColor: '#bbb',
    borderWidth: 0.4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: hp('3'),
  },
  contactProfile: {
    width: wp('12'),
    height: hp('6'),
  },
  contactInner: {
    width: wp('80'),
    paddingLeft: wp('3'),
    paddingBottom: hp('3'),
  },
  designationStyle: {
    fontWeight: 500,
    color: Colors.black,
    fontSize: hp('2'),
  },
  name: {
    fontWeight: 300,
    color: Colors.black,
    fontSize: hp('1.7'),
    marginTop: hp('.4'),
  },
  footer: {
    paddingLeft: wp('15'),
  },
  footerH: {
    color: Colors.primaryColor,
    fontSize: hp('1.8'),
    fontWeight: 500,
  },
  footerT: {
    fontSize: hp('1.7'),
    marginTop: hp('.3'),
  },
});
