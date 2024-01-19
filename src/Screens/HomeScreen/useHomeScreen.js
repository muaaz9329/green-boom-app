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
      // console.log('fi', videoPlayerRef.current.state.paused);
    }
  }, [isVideo]);

  // if (NavigationService.ref) {
  //   const callHandlePlayer = () => {
  //     console.log('skjdbjksbdjkbsdsdsdsdjkbjfk', NavigationService.ref);

  //   };
  //   callHandlePlayer();
  // }

  const VideoData = async () => {
    const {ok, data} = await API.get(welcomeVideo);

    if (ok) {
      setVideoUrl(data);
    }
  };

  useEffect(() => {
    VideoData();
    console.log('wrking asd');
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
