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
    marginTop: hp('1'),
  },
});
