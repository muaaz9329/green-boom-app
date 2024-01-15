import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  productMain: {
    marginTop: hp('3'),
    marginBottom: hp('3'),
    paddingHorizontal: wp('3'),
  },
  title: {
    flex: 1,
    flexDirection: 'row',
    marginTop: hp('2'),
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  titleInner: {
    width: wp('64'),
    fontSize: hp('2.5'),
    fontWeight: '600',
    color: Colors.primaryColor,
  },
  sku: {
    width: wp('29'),
    textAlign: 'right',
    fontSize: hp('1.9'),
  },
  usage: {
    fontSize: hp('1.6'),
    marginTop: hp('0.5'),
    color: Colors.textGray,
  },
  pTitle: {
    fontSize: hp('1.9'),
    marginTop: hp('0.5'),
    color: Colors.black,
    marginTop: hp('1.5'),
    fontWeight: '500',
  },
  dropTitle: {
    marginBottom: hp('1.4'),
  },
  pDesc: {
    fontSize: hp('1.6'),
    marginTop: hp('0.8'),
    color: Colors.textGray,
    lineHeight: 20,
  },
  pDescLast: {
    marginBottom: hp('3'),
  },
  sizeMain: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: Colors.grayBorder,
    paddingVertical: hp('1.5'),
    flexWrap: 'wrap',
  },
  size: {
    width: wp('59.5'),
    fontSize: hp('1.6'),
    textTransform: 'uppercase',
    fontWeight: '500',
    // backgroundColor: 'red',
  },
  sizeValue: {
    fontSize: hp('1.6'),
    marginTop: hp('0.5'),
    color: Colors.textGray,
    width: wp('34.1'),
    textAlign: 'right',
  },
  lastSection: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    width: wp('47'),
    alignItems: 'center',
    paddingVertical: hp('2.5'),
  },
  lastIcon: {
    width: wp('12'),
    resizeMode: 'contain',
    height: hp('3.6'),
  },
  lastName: {
    fontSize: hp('1.6'),
    color: Colors.textGray,
    width: wp('35'),
  },
  selectIcon: {
    width: wp('94'),
    height: hp('6'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
  },
  selectText: {
    fontSize: hp('1.9'),
    textAlign: 'left',
  },
  arrowStyle: {
    width: wp('3.6'),
    resizeMode: 'contain',
  },
  selected: {
    textAlign: 'left',
    fontSize: hp('1.9'),
  },
  remed: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopWidth: 1,
    borderColor: Colors.grayBorder,
    paddingVertical: hp('1.5'),
    alignItems: 'center',
  },
  remedSelectIcon: {
    width: wp('34'),
    height: hp('4'),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grayBorder,
  },
});
