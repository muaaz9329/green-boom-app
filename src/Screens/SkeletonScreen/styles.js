import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  pdfMain: {
    padding: 15,
    flexDirection: 'row',
  },
  pdf: {
    marginRight: 10,
  },
  VideoMain: {
    padding: 15,
  },
  video: {
    marginBottom: 10,
  },
  ProductMain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2.7'),
  },
  product: {
    marginHorizontal: 10,
  },
  CatlogMain: {
    padding: 12,
    // marginBottom: hp('.5'),
  },
  Demo: {
    marginHorizontal: 5,
  },
});
