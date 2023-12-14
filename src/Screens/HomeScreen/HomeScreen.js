import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from 'react-native';
import useReduxStore from '../../Hooks/UseReduxStore';
import {hp, wp} from '../../Config/responsive';
import VideoPlayer from '../../Components/VideoPlayer';
import useHomeScreen from './useHomeScreen';
import {TextComponent} from '../../Components/TextComponent';
import {styles} from './styles';
import ThemeButtonWithIcon from '../../Components/ThemeButtonWithIcon';
import {Touchable} from '../../Components/Touchable';

const HomeScreen = () => {
  const {dispatch} = useReduxStore();
  const {homeScreenBtns} = useHomeScreen();
  const functionObject = {
    onPressItem1: () => alert('Pressed item 1'),
    onPressItem2: () => alert('Pressed item 2'),
    onPressItem3: () => alert('Pressed item 3'),
    onPressItem4: () => alert('Pressed item 4'),
    onPressItem5: () => alert('Pressed item 5'),
    onPressItem6: () => alert('Pressed item 6'),
    // Add more functions as needed
  };
  const renderItem = useCallback(({item, index}) => {
    const onPressFunction = functionObject[`onPressItem${item.id}`];
    return (
      <View style={styles.card}>
        <Touchable style={styles.cardBtn} onPress={onPressFunction}>
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

    <View style={{flex: 1}}>
      <VideoPlayer videoSource={require('./test.mp4')} />
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
