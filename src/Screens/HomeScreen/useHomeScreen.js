import {useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';

const useHomeScreen = () => {
  return {
    homeScreenBtns,
  };
};

export default useHomeScreen;
