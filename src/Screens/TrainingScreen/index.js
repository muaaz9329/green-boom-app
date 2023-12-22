import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useTraining from './useTrainingScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {trainingPDFData, videosData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {boom} from '../../Assets';
import {CategoryIntro} from '../../Components/CategoryIntro';
import VideoThumbComponent from '../../Components/VideoThumbComponent';
import {imageUrl} from '../../Utils/Urls';

const TrainingScreen = ({route, navigation}) => {
  const {
    isCategory,
    categoryData,
    title,
    isVideo,
    category,
    subCategory,
    iconType,
  } = useTraining(navigation, route);
  console.log('first', isVideo);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable
        style={styles.pdfMain}
        onPress={() => Linking.openURL(imageUrl(item?.file))}>
        <Image
          source={iconType[item?.file_type]}
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
    // console.log('duurruru', item);
    return (
      // <VideoComponent
      //   videoUrl={item?.category[index]?.videoUrl}
      //   videoUrl={require('../HomeScreen/test.mp4')}
      //   videoThumb={item?.videoThumb}
      //   videoTitle={item?.videoTitle}
      //   videoDesc={item?.videoDesc}
      // />
      <VideoThumbComponent
        videoTitle={item?.videoTitle}
        videoDesc={item?.videoDesc}
        videoThumb={item?.videoThumb}
        onPress={() => navigation.navigate('SingleVideoScreen', item)}
      />
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        search={true}
        isCategory={isCategory}
        categoryData={category}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {isVideo ? (
          <View style={styles.videoMain}>
            <CategoryIntro
              introImage={boom}
              introTitle={'Booms'}
              introDescription={
                'Our awesome name-sake booms provide rapid absorption ideal for marine environments.'
              }
            />
            <FlatList
              refreshing={false}
              data={videosData.category}
              renderItem={renderVideos}
              contentContainerStyle={
                {
                  // alignItems: 'center',
                }
              }
            />
          </View>
        ) : (
          <FlatList
            refreshing={false}
            data={subCategory}
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
