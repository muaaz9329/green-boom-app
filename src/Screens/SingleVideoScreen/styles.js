import {StyleSheet} from 'react-native';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const styles = StyleSheet.create({
  header: isPortrait => ({
    display: !isPortrait ? 'none' : 'flex',
  }),
  trainingMain: {
    // paddingHorizontal: wp('3.5'),
    flex: 1,
  },
});
