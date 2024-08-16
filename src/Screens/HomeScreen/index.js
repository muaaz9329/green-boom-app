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
  TouchableOpacity,
  Linking,
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
import YoutubePlayer from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
    // videoUrl,

    homeData,
  } = useHomeScreen(navigation);
  const [play, setPlay] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(true);
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
      <View
        style={{
          height: 210,
          width: wp('90'),
          alignSelf: 'center',
          marginTop: hp('2'),
          borderRadius: 20,
          overflow: 'hidden',
          position: 'relative',
        }}>
        {showThumbnail && (
          <>
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: '40%',
                left: '45%',
                zIndex: 1,
              }}
              onPress={() => {
                setShowThumbnail(false);
                setPlay(true);
              }}>
              <Icon name="play-circle" size={35} color={'white'} />
            </TouchableOpacity>
            <Image
              source={{
                uri: homeData?.dashboardVideoThumb,
              }}
              style={{
                height: 210,
                width: wp('90'),
                alignSelf: 'center',
                borderRadius: 20,
              }}
            />
          </>
        )}
        <YoutubePlayer
          height={250}
          width={wp('90')}
          play={play}
          videoId={String(homeData?.dashboardVideoUrl).split('v=')[1]}
        />
      </View>

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
            onPress={() => Linking.openURL(homeData?.dashboardCatalog)}
            title={'Download Catalog & Brochures'}
            image={documentDownload}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
