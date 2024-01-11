import {useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';

const useHomeScreen = ({navigate}) => {
  const onPress = (screen, item) => navigate(screen, item);
  const [videoOn, setVideoOn] = useState(false);

  const videoP = () => {
    console.log('test1');
  };

  return {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
  };
};

export default useHomeScreen;
