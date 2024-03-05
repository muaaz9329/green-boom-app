import {Dimensions, StyleSheet} from 'react-native';
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
    height: hp('5.5'),
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
    aspectRatio: 1,
    alignSelf: 'center',
    position: 'relative',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.3,
  },
  blurMain: {
    marginTop: hp('-9'),
  },
  names: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    alignSelf: 'center',
    color: Colors.primaryColor,
    fontWeight: 500,
    marginTop: hp('2'),
    fontSize: hp('2.3'),
    textTransform: 'capitalize',
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
    // position: 'absolute',
    bottom: hp('-10'),
    // left: wp('4'),
  },
  btnText: {
    color: Colors.black,
  },
  imgStyle: {
    width: wp('10'),
    marginRight: wp('2'),
    // marginLeft: wp('-2'),
    resizeMode: 'contain',
    height: hp('5'),
  },
  addImageIcon: {
    alignSelf: 'center',
    width: wp('14'),
    height: hp('8'),
    resizeMode: 'contain',
  },
  profileIcon: {
    position: 'absolute',
    right: wp('36'),
    top: hp('1'),
    zIndex: 1,
  },
  addImageIcon: {
    width: wp('10'),
    resizeMode: 'contain',
  },
});
