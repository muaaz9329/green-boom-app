import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  cardBtn: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: wp('5'),
    marginBottom: hp('2'),
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    paddingBottom: hp('2'),
    marginTop: hp('3'),
  },
  iconStyle: {
    width: wp('26'),
    height: hp('13'),
    resizeMode: 'contain',
  },
  imageStyle: {
    width: wp('64'),
    paddingHorizontal: wp('3'),
    justifyContent: 'center',
  },
  titleStyle: {
    fontSize: hp('2'),
    fontWeight: '500',
    color: Colors.black,
    width: wp('34'),
    height: hp('3.5'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  descStyle: {
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
    lineHeight: 19,
  },
  proMain: {
    marginTop: hp('5'),
  },
  titleArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  videoTitle: {
    width: wp('21'),
    textAlign: 'right',
    color: Colors.themeRed,
    fontSize: hp('1.7'),
  },
  videoIcon: {
    width: wp('6'),
    resizeMode: 'contain',
    height: hp('3'),
  },
  videoIcoMain: {
    marginTop: hp('-.5'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kitInclude: {
    color: Colors.black,
    fontWeight: '500',
    fontSize: hp('1.7'),
  },
  kitInner: {
    marginHorizontal: wp('5'),
    borderBottomWidth: 0.5,
    borderColor: Colors.gray,
    paddingBottom: hp('2'),
    marginBottom: hp('1.5'),
  },
  subDes: {
    flexDirection: 'row',
  },
  dotSt: {
    width: wp('1.4'),
    height: hp('.7'),
    padding: 1,
    backgroundColor: Colors.textGray,
    borderRadius: 50,
    marginTop: hp('1.3'),
  },
  pDescLast: {
    width: wp('95'),
    marginLeft: wp('1.5'),
    marginTop: hp('0.3'),
    lineHeight: 20,
    fontSize: hp('1.7'),
    fontWeight: '300',
    color: Colors.textGray,
  },
  form: {
    marginHorizontal: wp('5'),
  },
  inputCol: {
    flexDirection: 'row',
  },
  inputLeft: {
    width: wp('43'),
    height: hp('5.5'),
    marginRight: wp('2'),
    paddingLeft: wp('1'),
  },
  inputRight: {
    width: wp('43'),
    height: hp('5.5'),
    marginLeft: wp('2'),
    paddingLeft: wp('1'),
  },
  address: {
    height: hp('5.5'),
    paddingLeft: wp('1'),
  },
  kitBtn: {
    marginTop: hp('.5'),
  },
});
