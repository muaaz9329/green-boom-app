import React, {memo} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import {HeaderComponent} from '../../Components/HeaderComponent';
import useSingleVideoScreen from './useSingleVideoScreen';

const SingleVideoScreen = ({route, navigation}) => {
  const {title} = useSingleVideoScreen(navigation, route);

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent title={title} search={true} />
    </View>
  );
};
export default memo(SingleVideoScreen);
