import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import useVideo from './useVideoScreen';
import {goBack} from '../../Utils';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {trainingPDFData} from '../../Utils/localDB';
import {hp} from '../../Config/responsive';

const VideoScreen = ({route, navigation}) => {
  const {isCategory, categoryData} = useVideo(navigation, route);

  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable style={styles.pdfMain}>
        <Image
          source={item?.image}
          style={styles.PDFImage}
          resizeMode="contain"
        />
        <View style={styles.pdfInner}>
          <TextComponent styles={styles.pdfTitle} text={item?.title} />
          <TextComponent styles={styles.pdfDesc} text={item?.description} />
        </View>
      </Touchable>
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={'Videos'}
        search={true}
        isCategory={isCategory}
        categoryData={categoryData}
      />
      <ScrollView>
        <FlatList
          refreshing={false}
          data={trainingPDFData}
          renderItem={renderItem}
          contentContainerStyle={{
            // alignItems: 'center',
            marginTop: hp('2'),
          }}
        />
      </ScrollView>
    </View>
  );
};
export default memo(VideoScreen);
