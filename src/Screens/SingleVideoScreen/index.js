import React, {memo} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import {HeaderComponent} from '../../Components/HeaderComponent';
import useSingleVideoScreen from './useSingleVideoScreen';
import VideoComponent from '../../Components/VideoComponent';
import {imageUrl} from '../../Utils/Urls';

const SingleVideoScreen = ({route, navigation}) => {
  const {title, isPortrait} = useSingleVideoScreen(navigation, route);
  const item = route.params;

  console.log('first port', isPortrait);
  console.log('asddd', item);

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        headerShow={styles.header(isPortrait)}
        title={'Video'}
        // search={true}
        goBack={() => navigation.goBack()}
      />
      <VideoComponent
        videoUrl={item?.videoUrl}
        uri={true}
        videoTitle={item?.name}
        // videoDesc={item?.description}
      />
    </View>
  );
};
export default memo(SingleVideoScreen);
