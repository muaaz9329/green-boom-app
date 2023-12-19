import {StyleSheet} from 'react-native';
import {TextComponent} from '../../Components/TextComponent';
import VideoPlayer from '../../Components/VideoPlayer';
import {hp} from '../../Config/responsive';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const VideoComponent = ({videoUrl, videoTitle, videoDesc, videoThumb}) => {
  return (
    <View>
      <VideoPlayer videoSource={videoUrl} VideoThumb={videoThumb} />
      <TextComponent text={videoTitle} styles={styles.videoTitle} />
      <TextComponent text={videoDesc} styles={styles.videoDesc} />
    </View>
  );
};
export default VideoComponent;

const styles = StyleSheet.create({
  videoTitle: {
    fontWeight: '500',
    fontSize: hp('2'),
    color: '#000',
    marginBottom: hp('1'),
  },
  videoDesc: {
    fontSize: hp('1.8'),
    color: Colors.lightGray,
  },
});
