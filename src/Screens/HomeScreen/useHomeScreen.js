import {useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';

const useHomeScreen = ({navigate}) => {
  const onPress = (screen, item) => navigate(screen, item);

  return {
    homeScreenBtns,
    onPress,
  };
};

export default useHomeScreen;
