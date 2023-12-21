import {StyleSheet, View} from 'react-native';
import {TextComponent} from './TextComponent';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import VideoPlayer from './VideoPlayer';
import {hp, wp} from '../Config/responsive';

const VideoComponent = ({videoUrl, videoTitle, videoDesc, videoThumb}) => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer
        showVideo={true}
        pause={false}
        videoSource={videoUrl}
        VideoThumb={videoThumb}
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
  },
  videoDesc: {
    fontSize: hp('1.8'),
    color: Colors.lightGray,
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
