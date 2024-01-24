import {Dimensions, StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginHorizontal: wp('4'),
    marginBottom: hp('2'),
    marginTop: hp('.8'),
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
    // height: hp('71.5'),
    paddingHorizontal: wp('4'),
  },
  titleStyle: {
    width: wp('74'),
    paddingHorizontal: wp('3'),
    fontSize: hp('2'),
    color: Colors.black,
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
    // height: hp('15'),
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
    resizeMode: 'contain',
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
    marginBottom: hp('4'),
    fontWeight: 300,
    fontSize: hp('1.8'),
  },
  logoutBtn: {
    height: hp('23'),
  },
  btn: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.grayBorder,
    position: 'absolute',
    bottom: 0,
    // left: wp('4'),
  },
  btnText: {
    color: Colors.black,
  },
  imgStyle: {
    width: wp('10'),
    marginRight: wp('0'),
    marginLeft: wp('-4'),
  },
  passStyle: {
    width: wp('50'),
    marginHorizontal: wp('3'),
    height: hp('5.5'),
    resizeMode: 'contain',
  },
  passTextStyle: {
    width: wp('28'),
    textAlign: 'right',
    color: Colors.textGray,
    fontSize: hp('1.8'),
  },
  inputStyle: {
    backgroundColor: Colors.white,
    borderColor: Colors.grayBorder,
    marginVertical: hp('.4'),
  },
  subHd: {
    fontSize: hp('1.7'),
    color: Colors.textGray,
    marginTop: hp('.5'),
  },
  buttonStyle: {
    // position: 'absolute',
    bottom: 0,
    // left: wp('4'),
  },

  profileIcon: {
    position: 'absolute',
    right: wp('32'),
    top: hp('1.5'),
    zIndex: 1,
  },
  addImageIcon: {
    width: wp('10'),
    resizeMode: 'contain',
  },
  nameSt: {
    textTransform: 'capitalize',
    backgroundColor: Colors.white,
    borderColor: Colors.grayBorder,
    marginVertical: hp('.4'),
  },
});
