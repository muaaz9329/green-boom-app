import React, {memo, useCallback} from 'react';
import {Image, Text, View} from 'react-native';
import useSkeletonScreen from './useSkeletonScreen';
import {styles} from './styles';
import {Skeleton} from 'react-native-skeletons';

export const PdfSkeletonScreen = () => {
  return (
    <View>
      <View style={styles.pdfMain}>
        <Skeleton
          count={1}
          width={'12%'}
          height={42}
          color={'grey'}
          borderRadius={5}
          style={styles.pdf}
        />
        <Skeleton
          count={1}
          width={'85%'}
          height={42}
          color={'grey'}
          borderRadius={5}
        />
      </View>
    </View>
  );
};

export const VideoSkeletonScreen = () => {
  return (
    <View>
      <View style={styles.VideoMain}>
        <Skeleton
          count={1}
          width={'100%'}
          height={150}
          color={'grey'}
          borderRadius={10}
          style={styles.video}
        />
        <Skeleton
          count={1}
          width={'100%'}
          height={15}
          color={'grey'}
          borderRadius={5}
          style={styles.myCustomStyle}
        />
      </View>
    </View>
  );
};

export const ProductSkeletonScreen = () => {
  return (
    <View style={styles.ProductMain}>
      <Skeleton
        count={1}
        width={'40%'}
        height={150}
        color={'grey'}
        borderRadius={10}
        style={styles.product}
      />
      <Skeleton
        count={1}
        width={'40%'}
        height={150}
        color={'grey'}
        borderRadius={10}
        style={styles.product}
      />
    </View>
  );
};

export const CatlogSkeletonScreen = () => {
  return (
    <View style={styles.CatlogMain}>
      <Skeleton
        count={1}
        width={'100%'}
        height={55}
        color={'grey'}
        borderRadius={10}
      />
    </View>
  );
};

export const DemoSkeletonScreen = () => {
  return (
    <View style={styles.ProductMain}>
      <Skeleton
        count={1}
        width={'25%'}
        height={95}
        color={'grey'}
        borderRadius={10}
        style={styles.Demo}
      />
      <Skeleton
        count={1}
        width={'63%'}
        height={95}
        color={'grey'}
        borderRadius={10}
        style={styles.Demo}
      />
    </View>
  );
};
