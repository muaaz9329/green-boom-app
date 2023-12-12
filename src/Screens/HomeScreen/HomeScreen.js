import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Touchable} from '../../Components/Touchable';
import {logOutUser} from '../../Redux/Action/AuthAction';
import useReduxStore from '../../Hooks/UseReduxStore';
import Overlay from '../../Components/Overlay';
import Icon from 'react-native-vector-icons/Feather';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';

const HomeScreen = () => {
  const {dispatch} = useReduxStore();
  // const [state, setState] = useState({
  //   currentTime: 0,
  //   duration: 0,
  //   paused: false,
  //   // paused: true,
  //   overlay: false,
  //   buffer: false,
  //   mute: false,
  //   fullScreen: false,
  //   hitFirst: false,
  // });
  useEffect(() => {
    Orientation.addDeviceOrientationListener(handleOrientation);
  });
  const [fullscreen, setFullScreen] = useState(false);
  const handleFullScreen = () => {
    if (fullscreen) {
      Orientation.unlockAllOrientations();
    } else {
      Orientation.lockToLandscapeLeft();
    }
  };

  const handleOrientation = orientation => {
    if (orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT') {
      setFullScreen(true);
      StatusBar.setHidden(true);
    } else {
      setFullScreen(false);
      StatusBar.setHidden(false);
    }
  };

  return (
    // <View>
    //   <Touchable onPress={() => dispatch(logOutUser())}>
    //     <Text>logout</Text>
    //   </Touchable>
    // </View>

    <View style={{flex: 1}}>
      {/* <Text>test</Text> */}
      <Video
        resizeMode="contain"
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
      <Touchable onPress={handleFullScreen}>
        <Icon name="maximize" size={30} color="#900" />
      </Touchable>
    </View>
  );
};

export default HomeScreen;
var styles = StyleSheet.create({
  backgroundVideo: {
    width: '100%',
    height: '30%',
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
  },
});
