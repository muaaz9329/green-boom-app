import React, {memo, useCallback} from 'react';
import {View, Text, Image, ScrollView, FlatList, Linking} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import useTraining from './useTrainingScreen';
import {HeaderComponent} from '../../Components/HeaderComponent';
import {Touchable} from '../../Components/Touchable';
import {accordionData, trainingPDFData, videosData} from '../../Utils/localDB';
import {hp, wp} from '../../Config/responsive';
import {arrDown, arrUp, boom, emailIcon} from '../../Assets';
import {CategoryIntro} from '../../Components/CategoryIntro';
import VideoThumbComponent from '../../Components/VideoThumbComponent';
import {imageUrl} from '../../Utils/Urls';
import Accordion from 'react-native-collapsible/Accordion';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const TrainingScreen = ({route, navigation}) => {
  const {
    isCategory,
    categoryData,
    title,
    isVideo,
    category,
    subCategory,
    iconType,
    onCategory,
    activeBtn,
    accordionItem,
    setAccordionItem,
    accordionBool,
    setAccordionBool,
  } = useTraining(navigation, route);
  // console.log('first', isVideo);
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

  const renderHeader = (item, index) => {
    const i = [index].toString() == accordionItem.toString();
    return (
      <>
        {index == 0 || index == 4 ? '' : <View style={styles.separator}></View>}
        <View style={styles.acc}>
          <TextComponent text={'test'} styles={styles.accTitle} />
          <Image source={i ? arrDown : arrUp} style={styles.accImage} />
        </View>
      </>
    );
  };
  const renderContentInner = useCallback(item => {
    const itemData = item?.item;
    // console.log('ren item', itemData);
    return (
      <View style={styles.card}>
        <Touchable style={styles.cardBtn}>
          <View style={styles.imageStyle}>
            <Image source={itemData?.icon} style={styles.iconStyle} />
            <TextComponent text={itemData?.title} styles={styles.titleStyle} />
          </View>
        </Touchable>
      </View>
    );
  });
  const renderContent = () => {
    // console.log('check', accordionData);
    return (
      <FlatList
        refreshing={false}
        data={accordionData}
        numColumns={2}
        renderItem={renderContentInner}
        contentContainerStyle={{
          // alignItems: 'center',
          marginHorizontal: wp('2'),
        }}
      />
    );
  };
  const renderAccordion = useCallback(() => {
    return (
      <>
        <Accordion
          underlayColor="#D9D9D9"
          activeSections={accordionItem}
          sections={['Section 1', 'Section 2', 'Section 3', 'Section 4']}
          // renderSectionTitle={this._renderSectionTitle}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(i, index) => {
            setAccordionItem(i);
            console.log('i', i);
          }}
        />
      </>
    );
  });

  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        search={true}
        isCategory={isCategory}
        categoryData={category}
        activeBtn={activeBtn}
        onPress={item => onCategory(item)}
        goBack={() => navigation.goBack()}
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
            {/* <FlatList
              refreshing={false}
              data={}
              renderItem={renderVideos}
              contentContainerStyle={
                {
                  // alignItems: 'center',
                }
              }
            /> */}
          </View>
        ) : (
          <>
            <FlatList
              refreshing={false}
              data={subCategory}
              renderItem={renderItem}
              contentContainerStyle={{
                // alignItems: 'center',
                marginTop: hp('2'),
              }}
            />
            {renderAccordion()}
          </>
        )}
      </ScrollView>
    </View>
  );
};
export default memo(TrainingScreen);
