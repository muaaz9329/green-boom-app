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
    marginHorizontal: wp('7'),
    marginVertical: hp('2.5'),
    flexWrap: 'wrap',
  },
  PDFImage: {
    width: wp('15'),
    height: hp('7.5'),
    marginRight: wp('3'),
    flex: 0.2,
  },
  pdfInner: {
    flex: 0.8,
  },
  pdfTitle: {
    fontWeight: '600',
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
    marginTop: hp('4'),
  },
  // msds card
  card: {
    paddingHorizontal: wp('2'),
    shadowColor: 'gray',
  },
  cardBtn: {},
  imageStyle: {
    width: wp('36'),
    height: hp('19'),
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
});
