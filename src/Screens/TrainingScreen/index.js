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
} from '../../Assets';
import {CategoryIntro} from '../../Components/CategoryIntro';
import VideoThumbComponent from '../../Components/VideoThumbComponent';
import {imageUrl} from '../../Utils/Urls';
import Accordion from 'react-native-collapsible/Accordion';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ThemeButton from '../../Components/ThemeButton';
import NoDataFound from '../../Components/DataNotFound';
import DataNotFound from '../../Components/DataNotFound';
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
    scriptIconType,
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
          {/* <TextComponent styles={styles.pdfDesc} text={item?.description} /> */}
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
        videoTitle={item?.title}
        // videoDesc={item?.description}
        videoThumb={videoThumb}
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
  const renderContentInner = useCallback(item => {
    const itemData = item?.item;
    // console.log('ren item', item);
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => Linking.openURL(imageUrl(itemData?.file))}>
          <View style={styles.imageStyle}>
            <Image
              source={scriptIconType[itemData?.icon_type]}
              style={styles.iconStyle}
            />
            <TextComponent text={itemData?.title} styles={styles.titleStyle} />
          </View>
        </Touchable>
      </View>
    );
  });
  const renderContent = item => {
    // console.log('check asd', item.script_media);
    return (
      <FlatList
        refreshing={false}
        data={item?.script_media}
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
          underlayColor="transparent"
          activeSections={accordionItem}
          sections={subCategory}
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
  console.log('test', subCategory);
  return (
    <View style={styles.trainingMain}>
      <HeaderComponent
        title={title}
        // search={true}
        isCategory={isCategory}
        categoryData={category}
        activeBtn={activeBtn.id}
        onPress={item => onCategory(item)}
        goBack={() => navigation.goBack()}
      />
      {subCategory.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {(title == 'Videos' && activeBtn?.title == undefined) ||
          activeBtn?.title == 'Videos' ? (
            <View style={styles.videoMain}>
              {/* <CategoryIntro
              introImage={boom}
              introTitle={'Booms'}
              introDescription={
                'Our awesome name-sake booms provide rapid absorption ideal for marine environments.'
              }
            /> */}

              <FlatList
                refreshing={false}
                data={subCategory}
                renderItem={renderVideos}
                contentContainerStyle={
                  {
                    // alignItems: 'center',
                  }
                }
              />
            </View>
          ) : (
            <>
              {activeBtn.title !== 'Scripts' && (
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
              <View style={styles.script}>
                {activeBtn.title == 'Scripts' && renderAccordion()}
              </View>
            </>
          )}
        </ScrollView>
      ) : (
        <DataNotFound />
      )}
    </View>
  );
};
export default memo(TrainingScreen);
