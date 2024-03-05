import {useEffect, useRef, useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {welcomeVideo} from '../../Utils/Urls';
import NavigationService from '../../Services/NavigationService';
import useReduxStore from '../../Hooks/UseReduxStore';

const useHomeScreen = ({navigate}) => {
  const onPress = (screen, item) => navigate(screen, item);
  const [videoOn, setVideoOn] = useState(false);
  const [videoUrl, setVideoUrl] = useState([]);
  const {getState} = useReduxStore();

  const {isVideo} = getState('isVideo');

  const videoP = () => {
    console.log('test1');
  };

  const videoPlayerRef = useRef();

  useEffect(() => {
    if (videoPlayerRef.current && !videoPlayerRef.current.state.paused) {
      videoPlayerRef.current.handlePlayer();
    }
  }, [isVideo]);


  const VideoData = async () => {
    const {ok, data} = await API.get(welcomeVideo);

    if (ok) {
      setVideoUrl(data);
    }
  };

  useEffect(() => {
    VideoData();
  }, []);

  return {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
    videoUrl,
    videoPlayerRef,
  };
};

export default useHomeScreen;
