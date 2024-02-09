import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp('4'),
    marginBottom: hp('3'),
    alignItems: 'center',
    backgroundColor: Colors.white,
    paddingHorizontal: wp('2.5'),
    paddingVertical: wp('2.5'),
    borderRadius: 10,
  },
  iconStyle: {
    width: wp('10'),
    height: hp('5'),
    // marginBottom: hp('2'),
    resizeMode: 'contain',
  },
  catMain: {
    marginTop: hp('1'),
  },
  titleStyle: {
    width: wp('69'),
    paddingHorizontal: wp('3'),
    fontSize: hp('1.8'),
    fontWeight: '400',
    color: Colors.black,
    textTransform: 'capitalize',
  },
  descStyle: {
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
  },
  arrowRight: {
    width: wp('6'),
    height: hp('3'),
    // backgroundColor: 'red',
  },
  proMain: {
    marginTop: hp('5'),
  },
});
