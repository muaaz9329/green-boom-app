import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  BackHandler,
  TouchableWithoutFeedback,
  Platform,
  Text,
} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import Orientation from 'react-native-orientation-locker';
import {Slider} from '@miblanchard/react-native-slider';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {hp, wp} from '../Config/responsive';
import Icon from 'react-native-vector-icons/Feather';
import {Colors} from '../Theme/Variables';

const {width, height} = Dimensions.get('window');

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: this.props.pause ?? true,
      overlay: false,
      mute: false,
      fullScreen: false,
      showVideo: this.props.showVideo ?? false,
    };
  }

  hideFullScreen = () => {
    if (this.state.fullScreen) {
      this.setState({fullScreen: false});
      Orientation.lockToPortrait();
    }
    return true;
  };

  setFullScreen = () => {
    const {fullScreen} = this.state;
    if (fullScreen) {
      Orientation.lockToPortrait();
      this.setState({fullScreen: false});
    } else {
      Orientation.lockToLandscape();
      this.setState({fullScreen: true});
    }
  };

  handlePlayerStateChange = state => {
    if (state === 'ended') {
      this.setState({playing: false});
    }
  };

  handlePlayButtonPress = () => {
    this.setState({showVideo: true, playing: true});
  };

  handleMute = () => {
    this.setState({mute: !this.state.mute});
  };

  handlePlayPause = () => {
    this.setState({playing: !this.state.playing});
  };

  componentDidMount() {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.hideFullScreen,
    );
    return () => backHandler.remove();
  }

  componentWillUnmount() {
    const backHandler = BackHandler.removeEventListener(
      'hardwareBackPress',
      this.hideFullScreen,
    );
  }

  render() {
    const {playing, overlay, mute, fullScreen, showVideo} = this.state;

    return (
      <>
        {showVideo ? (
          <View
            style={{
              width: fullScreen ? '100%' : '92%',
              borderRadius: fullScreen ? 0 : 10,
              height: fullScreen ? '105%' : hp('28'),
              marginTop: fullScreen ? 0 : '3%',
              position: fullScreen ? 'absolute' : 'relative',
              zIndex: 99999,
              borderRadius: fullScreen ? 0 : 20,
              alignItems: 'center',
              alignSelf: 'center',
              ...this.props.VideoMainStyle,
            }}>
            <YoutubePlayer
              height={fullScreen ? height : hp('28')}
              play={playing}
              mute={mute}
              videoId={this.props.videoId} // Pass the YouTube video ID
              onChangeState={this.handlePlayerStateChange}
              onFullScreenChange={this.setFullScreen}
              forceAndroidAutoplay
            />

            <View style={styles.controlCover}>
              <TouchableWithoutFeedback>
                {overlay ? (
                  <View
                    style={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      position: 'absolute',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(0,0,0,0.6)',
                      paddingHorizontal: '5%',
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        top: heightPercentageToDP('3'),
                      }}>
                      <TouchableOpacity onPress={this.handlePlayPause}>
                        <Icon
                          name={playing ? 'pause-circle' : 'play-circle'}
                          size={25}
                          style={styles.centerButton}
                        />
                      </TouchableOpacity>
                      {fullScreen ? (
                        <MaterialIcons
                          name="fullscreen-exit"
                          color={'white'}
                          onPress={this.setFullScreen}
                          size={heightPercentageToDP('3')}
                        />
                      ) : (
                        <MaterialIcons
                          name="fullscreen"
                          color={'white'}
                          onPress={this.setFullScreen}
                          size={heightPercentageToDP('3')}
                        />
                      )}
                    </View>
                  </View>
                ) : (
                  <View style={styles.overlaySet}>
                    <TouchableWithoutFeedback>
                      <View style={{flex: 1}} />
                    </TouchableWithoutFeedback>
                  </View>
                )}
              </TouchableWithoutFeedback>
            </View>
          </View>
        ) : (
          <TouchableWithoutFeedback onPress={this.handlePlayButtonPress}>
            <View style={styles.thumbImageinner(fullScreen)}>
              <Image
                source={
                  this.props.isThumbnailUri
                    ? {uri: this.props.VideoThumb}
                    : this.props.VideoThumb
                }
                style={{
                  ...styles.thumbnail,
                  ...this.props.thumStyleProp,
                }}
              />
            </View>
          </TouchableWithoutFeedback>
        )}
      </>
    );
  }
}

export default VideoPlayer;

const styles = StyleSheet.create({
  thumbImageinner: fullScreen => ({
    width: '92%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: fullScreen ? 0 : '3%',
  }),
  controlCover: {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: 'absolute',
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  thumbnail: {
    resizeMode: 'cover',
    width: '100%',
    height: hp('28'),
    alignSelf: 'center',
    borderRadius: 20,
  },
  centerButton: {
    width: 26.5,
    height: 26.5,
  },
});
