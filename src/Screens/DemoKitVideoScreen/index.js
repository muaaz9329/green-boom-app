import React, {memo} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import {HeaderComponent} from '../../Components/HeaderComponent';
import useDemoKitVideoScreen from './useDemoKitVideoScreen';
import VideoComponent from '../../Components/VideoComponent';
import {imageUrl} from '../../Utils/Urls';

const DemoKitVideoScreen = ({route, navigation}) => {
  const {title, isPortrait} = useDemoKitVideoScreen(navigation, route);
  const item = route.params;

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        headerShow={styles.header(isPortrait)}
        title={'Video'}
        // search={true}
        goBack={() => navigation.goBack()}
      />
      <VideoComponent
        videoUrl={imageUrl(item?.file)}
        uri={true}
        videoTitle={item?.title}
      />
    </View>
  );
};
export default memo(DemoKitVideoScreen);
