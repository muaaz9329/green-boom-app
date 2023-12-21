import React, {useCallback, useState} from 'react';
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
import {introVideo} from '../../Assets';

const HomeScreen = ({navigation}) => {
  const {dispatch} = useReduxStore();
  const {homeScreenBtns, onPress} = useHomeScreen(navigation);

  const renderItem = useCallback(({item, index}) => {
    return (
      <View style={styles.card}>
        <Touchable
          style={styles.cardBtn}
          onPress={() => onPress(item?.routeName, item)}>
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
          <ThemeButtonWithIcon title={'Download Catalogs & Brochures'} />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
