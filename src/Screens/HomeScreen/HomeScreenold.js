import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Dimensions} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Touchable} from '../../Components/Touchable';
import {logOutUser} from '../../Redux/Action/AuthAction';
import useReduxStore from '../../Hooks/UseReduxStore';
import Overlay from '../../Components/Overlay';
import Icon from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import {hp, wp} from '../../Config/responsive';

const HomeScreen = () => {
  const {dispatch} = useReduxStore();

  return (
    // <View>
    //   <Touchable onPress={() => dispatch(logOutUser())}>
    //     <Text>logout</Text>
    //   </Touchable>
    // </View>

    <View style={styles.container}>
      {/* <Text>test</Text> */}
      <Video
        // resizeMode="contain"
        source={require('./test.mp4')} // Can be a URL or a local file.
        ref={ref => {
          this.player = ref;
        }} // Store reference
        controls={true}
        // onFull
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
};

export default HomeScreen;
var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '52%',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
  // container: {},
  // fullScreenContainer: {
  //   flex: 1,
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   zIndex: 5,
  //   // backgroundColor: 'red',
  // },
  // video: {
  //   height: windowHeight,
  //   width: windowWidth,
  //   // backgroundColor: 'red',
  // },
  // fullScreenVideo: {
  //   flex: 1,
  //   height: height,
  //   width: width,
  // },
  // text: {
  //   marginTop: hp('10'),
  //   marginHorizontal: wp('5'),
  //   fontSize: 15,
  //   textAlign: 'justify',
  // },
  // fullscreenButton: {
  //   // flex: 1,
  //   flexDirection: 'row',
  //   alignSelf: 'flex-end',
  //   alignItems: 'center',
  //   paddingRight: 10,
  // },
  // controlOverlay: {
  //   position: 'absolute',
  //   top: 0,
  //   bottom: 0,
  //   left: 0,
  //   right: 0,
  //   justifyContent: 'space-between',
  // },
});
