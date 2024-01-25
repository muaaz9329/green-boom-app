import React from 'react';
import {Text, View} from 'react-native';
import {hp, wp} from '../../Config/responsive';

export const TraningSkeleton = ({props}) => {
  return <View style={{flex: 1, paddingHorizontal: wp('2')}}></View>;
};
