import {useEffect, useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {welcomeVideo} from '../../Utils/Urls';

const useHomeScreen = ({navigate}) => {
  const onPress = (screen, item) => navigate(screen, item);
  const [videoOn, setVideoOn] = useState(false);
  const [videoUrl, setVideoUrl] = useState([]);

  const videoP = () => {
    console.log('test1');
  };

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
  };
};

export default useHomeScreen;
