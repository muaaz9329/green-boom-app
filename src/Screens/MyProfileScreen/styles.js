import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp('4'),
    marginBottom: hp('2'),
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: wp('2.5'),
    paddingVertical: wp('1.5'),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
  },
  iconStyle: {
    width: wp('12'),
    height: hp('6'),
    // marginBottom: hp('2'),
    resizeMode: 'contain',
  },
  catMain: {
    // marginTop: hp('-3'),
    position: 'relative',
    height: hp('93'),
  },
  titleStyle: {
    width: wp('74'),
    paddingHorizontal: wp('3'),
    fontSize: hp('2'),
    color: Colors.black,
  },
  passStyle: {
    width: wp('50'),
    marginHorizontal: wp('3'),
    height: hp('1.2'),
    resizeMode: 'contain',
  },
  descStyle: {
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
  },

  proMain: {
    marginTop: hp('5'),
  },
  ProfileImage: {
    height: hp('15'),
    aspectRatio: 1,
    alignSelf: 'center',
    position: 'relative',
  },
  blurMain: {
    marginTop: hp('-9'),
  },
  name: {
    alignSelf: 'center',
    color: Colors.primaryColor,
    fontWeight: 500,
    marginTop: hp('2'),
    fontSize: hp('2.3'),
  },
  email: {
    alignSelf: 'center',
    fontSize: hp('2'),
    color: Colors.textGray,
    marginBottom: hp('5'),
    fontWeight: 300,
    fontSize: hp('1.8'),
  },

  logoutBtn: {
    paddingHorizontal: wp('4'),
    height: hp('23'),
  },
  btn: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
    position: 'absolute',
    bottom: 0,
    left: wp('4'),
  },
  btnText: {
    color: Colors.black,
  },
  imgStyle: {
    width: wp('10'),
    marginRight: wp('0'),
    marginLeft: wp('-4'),
  },
});
