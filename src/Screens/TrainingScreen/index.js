import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';

import useTraining from './useTrainingScreen';
import {goBack} from '../../Utils';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {trainingPDFData, videosData} from '../../Utils/localDB';
import {hp} from '../../Config/responsive';
import {boom} from '../../Assets';
import {CategoryIntro} from '../../Components/CategoryIntro';
import VideoComponent from './VideoComponent';

const TrainingScreen = ({route, navigation}) => {
  const {isCategory, categoryData, title, isVideo} = useTraining(
    navigation,
    route,
  );
  console.log('first', isVideo);
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

  const renderVideos = useCallback(({item, index}) => {
    console.log('duurruru', item);
    return (
      <VideoComponent
        // videoUrl={item?.category[index]?.videoUrl}
        videoUrl={require('../HomeScreen/test.mp4')}
        videoThumb={item?.category[index]?.videoThumb}
        videoTitle={item?.category[index]?.videoTitle}
        videoDesc={item?.category[index]?.videoDesc}
      />
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        search={true}
        isCategory={isCategory}
        categoryData={categoryData}
      />
      <ScrollView>
        {isVideo ? (
          <View>
            <CategoryIntro
              introImage={boom}
              introTitle={'Booms'}
              introDescription={
                'Our awesome name-sake booms provide rapid absorption ideal for marine environments.'
              }
            />
            <FlatList
              refreshing={false}
              data={videosData}
              renderItem={renderVideos}
              contentContainerStyle={{
                // alignItems: 'center',
                marginTop: hp('2'),
              }}
            />
          </View>
        ) : (
          <FlatList
            refreshing={false}
            data={trainingPDFData}
            renderItem={renderItem}
            contentContainerStyle={{
              // alignItems: 'center',
              marginTop: hp('2'),
            }}
          />
        )}
      </ScrollView>
    </View>
  );
};
export default memo(TrainingScreen);
