import {Alert, Button, StyleSheet, View} from 'react-native';
import {TextComponent} from './TextComponent';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import VideoPlayer from './VideoPlayer';
import YoutubePlayer from 'react-native-youtube-iframe';

import {hp, wp} from '../Config/responsive';
import {useCallback, useState} from 'react';

const VideoComponent = ({videoUrl, videoTitle, videoDesc, videoThumb}) => {
  const [playing, setPlaying] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <View style={{flex: 1}}>
      <YoutubePlayer
        height={250}
        play={playing}
        videoId={String(videoUrl).split('v=')[1]}
        onChangeState={onStateChange}
      />

      <View style={styles.videoMainComp}>
        <TextComponent text={videoTitle} styles={styles.videoTitle} />
        <TextComponent text={videoDesc} styles={styles.videoDesc} />
      </View>
    </View>
  );
};
export default VideoComponent;

const styles = StyleSheet.create({
  videoMainComp: {
    marginHorizontal: wp('5'),
    marginBottom: hp('3'),
  },
  videoTitle: {
    fontWeight: '500',
    fontSize: hp('2'),
    color: '#000',
    marginBottom: hp('1'),
    marginTop: hp('2'),
    textAlign: 'center',
  },
  videoDesc: {
    fontSize: hp('1.8'),
    color: '#000',
    textAlign: 'center',
    fontWeight: '300',
    lineHeight: 20,
  },
  thumStyle: {
    borderRadius: 7,
    resizeMode: 'cover',
    width: '100%',
  },
  VideoInnerStyle: {
    borderRadius: 7,
  },
  VideoOuterStyle: {
    borderRadius: 7,
    width: '100%',
    marginHorizontal: '0%',
  },
});
