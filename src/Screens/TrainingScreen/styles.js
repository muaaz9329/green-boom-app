import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  trainingMain: {
    // paddingHorizontal: wp('3.5'),
    flex: 1,
  },
  pdfMain: {
    flexDirection: 'row',
    marginHorizontal: wp('5'),
    marginVertical: hp('1.5'),
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1.5'),
    flexWrap: 'wrap',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  PDFImage: {
    width: wp('15'),
    height: hp('7.5'),
    marginRight: wp('3'),
    flex: 0.2,
  },
  pdfInner: {
    flex: 0.8,

    justifyContent: 'center',
  },
  pdfTitle: {
    fontWeight: '400',
    fontSize: hp('2'),
  },
  pdfDesc: {
    color: Colors.lightGray,
    fontSize: hp('1.6'),
    marginTop: hp('.6'),
  },
  videoMain: {
    // paddingHorizontal: wp('2'),
    flex: 1,
    marginTop: hp('3'),
  },
  // msds card

  imageStyle: {
    width: wp('36'),
    height: hp('20'),
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
    width: wp('13'),
    height: hp('6'),
    marginBottom: hp('2'),
  },
  titleStyle: {
    fontSize: hp('1.8'),
    textAlign: 'center',
    height: hp('10'),
  },
  // accordion
  cardBtn: {
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  card: {
    marginHorizontal: wp('2'),
    marginVertical: hp('1'),
    marginBottom: hp('1'),
  },
  imageStyle: {
    width: wp('40'),
    height: hp('13'),
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: hp('1'),
    marginHorizontal: wp('2'),
    marginBottom: hp('2'),
    shadowColor: 'gray',
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
  acc: {
    flexDirection: 'row',
    paddingVertical: hp('1'),
    paddingHorizontal: wp('5'),
    // marginBottom: hp('1'),
  },
  accTitle: {
    width: wp('86'),
    fontSize: hp('1.7'),
  },
  accImage: {
    resizeMode: 'contain',
    width: wp('4'),
  },
  separator: {
    borderBottomColor: '#bbb',
    borderWidth: 0.4,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: hp('2'),
    marginBottom: hp('2'),
    marginHorizontal: wp('5'),
  },
  script: {
    marginTop: hp('3'),
  },
});
