import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp('5'),
    marginBottom: hp('5'),
  },
  iconStyle: {
    width: wp('21'),
    height: hp('10'),
    // marginBottom: hp('2'),
    resizeMode: 'contain',
  },
  imageStyle: {
    width: wp('61'),
    paddingHorizontal: wp('3'),
  },
  titleStyle: {
    fontSize: hp('2.5'),
    fontWeight: '500',
    marginBottom: hp('1.5'),
    color: Colors.primaryColor,
  },
  descStyle: {
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
  },
  arrowRight: {
    width: wp('7'),
  },
  proMain: {
    marginTop: hp('5'),
  },
});
