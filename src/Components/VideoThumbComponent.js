import {StyleSheet, View, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {TextComponent} from './TextComponent';
import {hp, wp} from '../Config/responsive';

const VideoThumbComponent = ({videoTitle, videoDesc, videoThumb}) => {
  return (
    <View style={{flex: 1}}>
      <Image source={videoThumb} style={styles.videoThumbnail} />
      <View style={styles.videoMainComp}>
        <TextComponent text={videoTitle} styles={styles.videoTitle} />
        <TextComponent text={videoDesc} styles={styles.videoDesc} />
      </View>
    </View>
  );
};
export default VideoThumbComponent;

const styles = StyleSheet.create({
  videoMainComp: {
    marginHorizontal: wp('5'),
    marginBottom: hp('3'),
  },
  videoThumbnail: {
    width: wp('100'),
    height: hp('28'),
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
