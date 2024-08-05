import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import useReduxStore from '../../Hooks/UseReduxStore';
import {hp, wp} from '../../Config/responsive';
import VideoPlayer from '../../Components/VideoPlayer';
import useHomeScreen from './useHomeScreen';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import {Touchable} from '../../Components/Touchable';
import {documentDownload, introVideo} from '../../Assets';
import {baseURL, imageURL} from '../../Utils/Urls';
import NavigationService from '../../Services/NavigationService';

const HomeScreen = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
    // videoUrl,
    videoPlayerRef,
  } = useHomeScreen(navigation);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => {
            onPress(item?.routeName, item);
            // onPress(item?.routeName, item), callHandlePlayer();
          }}>
          <ImageBackground
            source={item?.image}
            resizeMode="contain"
            style={styles.imageStyle}>
            <Image source={item?.icon} style={styles.iconStyle} />
            <TextComponent text={item?.title} styles={styles.titleStyle} />
          </ImageBackground>
        </Touchable>
      </View>
    );
  });

  return (
    // <View>
    //   <Touchable onPress={() => dispatch(logOutUser())}>
    //     <Text>logout</Text>
    //   </Touchable>
    // </View>

    <View
      style={{flex: 1, paddingTop: Platform.OS == 'ios' ? hp('5') : hp('1.5')}}>
      <VideoPlayer
        videoSource={require('./test.mp4')}
        VideoThumb={introVideo}
        ref={videoPlayerRef}
      />

      <View>
        <FlatList
          refreshing={false}
          data={homeScreenBtns}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
            marginTop: hp('2.5'),
          }}
        />
        <View style={styles.button}>
          <ThemeButtonWithIcon
            onPress={() => navigation.navigate('CatalogScreen')}
            title={'Download Catalogs & Brochures'}
            image={documentDownload}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
