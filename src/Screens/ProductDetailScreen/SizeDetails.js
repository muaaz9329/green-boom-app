import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {hp, wp} from '../../Config/responsive';
import {Colors} from '../../Theme/Variables';

export const SizeDetails = ({sizeName, sizeValue}) => (
  <View style={styles.sizeMain}>
    <TextComponent text={sizeName} styles={styles.size} />
    <TextComponent
      text={sizeValue}
      styles={styles.sizeValue}
      // numberOfLines={1}
    />
  </View>
);

const styles = StyleSheet.create({
  sizeMain: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderColor: Colors.grayBorder,
    paddingVertical: hp('1.5'),
    // flexWrap: 'wrap',
  },
  size: {
    width: wp('52.5'),
    fontSize: hp('1.6'),
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  sizeValue: {
    fontSize: hp('1.6'),
    marginTop: hp('0.5'),
    color: Colors.textGray,
    width: wp('41.8'),
    textAlign: 'right',
    // alignSelf: 'flex-end',
  },
});
