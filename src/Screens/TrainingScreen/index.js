import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useTraining from './useTrainingScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {accordionData, trainingPDFData, videosData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {
  arrDown,
  arrUp,
  boom,
  dataNotFound,
  emailIcon,
  videoThumb,
  videoThumbWithPlay,
} from '../../Assets';
import {CategoryIntro} from '../../Components/CategoryIntro';
import VideoThumbComponent from '../../Components/VideoThumbComponent';
import {imageURL, imageUrl} from '../../Utils/Urls';
import Accordion from 'react-native-collapsible/Accordion';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ThemeButton from '../../Components/ThemeButton';
import NoDataFound from '../../Components/DataNotFound';
import DataNotFound from '../../Components/DataNotFound';
import {
  PdfSkeletonScreen,
  ProductSkeletonScreen,
  VideoSkeletonScreen,
} from '../SkeletonScreen';
const TrainingScreen = ({route, navigation}) => {
  const {title, isVideo, videosData, isloading} = useTraining(
    navigation,
    route,
  );

  // const isloading = false;
  // console.log('first', isVideo);
  const renderItem = useCallback(({item, index}) => {
    return (
      <Touchable
        style={styles.pdfMain}
        onPress={() =>
          item?.file_type == 'word'
            ? navigation.navigate('FaqsHtmlScreen', item)
            : Linking.openURL(imageUrl(item?.file))
        }>
        <Image
          source={iconType[item?.file_type]}
          style={styles.PDFImage}
          resizeMode="contain"
        />
        <View style={styles.pdfInner}>
          <TextComponent styles={styles.pdfTitle} text={item?.title} />
          {/* <TextComponent styles={styles.pdfDesc} text={item?.description} /> */}
        </View>
      </Touchable>
    );
  });

  const renderVideos = useCallback(({item, index}) => {
    console.log('duurruru', item);
    return (
      // <VideoComponent
      //   videoUrl={item?.category[index]?.videoUrl}
      //   videoUrl={require('../HomeScreen/test.mp4')}
      //   videoThumb={item?.videoThumb}
      //   videoTitle={item?.videoTitle}
      //   videoDesc={item?.videoDesc}
      // />
      <VideoThumbComponent
        videoTitle={item?.name}
        // videoDesc={item?.description}
        videoThumb={item?.thumb}
        // videoThumb={videoThumb}

        onPress={() => navigation.navigate('SingleVideoScreen', item)}
      />
    );
  });

  const renderHeader = (item, index) => {
    const i = [index].toString() == accordionItem.toString();
    return (
      <>
        {index == 0 || index == 4 ? '' : <View style={styles.separator}></View>}
        <View style={styles.acc}>
          <TextComponent text={item?.title} styles={styles.accTitle} />
          <Image source={i ? arrDown : arrUp} style={styles.accImage} />
        </View>
      </>
    );
  };

  const renderSkeleton = useCallback(({item, index}) => {
    return <VideoSkeletonScreen />;
  });
  const renderPDFSkeleton = useCallback(({item, index}) => {
    return <PdfSkeletonScreen />;
  });
  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={'Videos'}
        // search={true}
        // isCategory={isCategory}
        // categoryData={category}
        // activeBtn={activeBtn.id}
        onPress={item => onCategory(item)}
        goBack={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{marginTop: hp('1.2'), flex: 1}}>
          {videosData.length < 1 && (
            <FlatList
              refreshing={false}
              data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              renderItem={renderSkeleton}
              contentContainerStyle={{
                // alignItems: 'center',
                flex: 1,
              }}
            />
          )}

          {videosData.length > 0 && (
            <FlatList
              refreshing={false}
              data={videosData}
              renderItem={renderVideos}
              contentContainerStyle={{
                // alignItems: 'center',
                flex: 1,
              }}
            />
          )}
        </View>
      </ScrollView>

      {isloading && <DataNotFound />}
    </View>
  );
};
export default memo(TrainingScreen);
