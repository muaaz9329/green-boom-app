import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  homeMain: {
    flex: 1,
    // marginTop: hp('2'),
  },
  card: {
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardBtn: {},
  imageStyle: {
    width: wp('44'),
    height: hp('13'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: hp('1'),
    marginHorizontal: wp('2'),
    marginBottom: hp('2'),
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },

  iconStyle: {
    width: wp('9'),
    height: hp('4.5'),
    marginBottom: hp('2'),
  },
  titleStyle: {
    fontSize: hp('1.8'),
  },
  button: {
    marginHorizontal: wp('4'),
    marginTop: hp('.7'),
  },
  homeIntroVideo: {
    // marginHorizontal: wp('5'),
  },
});
