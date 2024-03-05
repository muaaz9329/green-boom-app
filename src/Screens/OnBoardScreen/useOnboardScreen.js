import {useRef, useState} from 'react';
import {Dimensions} from 'react-native';
import useReduxStore from '../../Hooks/UseReduxStore';
import {onBoardingData} from '../../Utils/localDB';
import {types} from '../../Redux/types';

const useOnboardingScreen = ({navigate, params}) => {
  const {dispatch} = useReduxStore();
  
  const flatListRef = useRef(null);


  const [currentIndex, setCurrentIndex] = useState(0);
  const width = Dimensions.get('window').width;

  const onSnapToItem = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(
      contentOffsetX / Dimensions.get('window').width,
    );
    setCurrentIndex(currentIndex);
  };


  const goNext = () => {
    if (currentIndex == 2) getStart();
    else {
      flatListRef.current.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(pre => pre + 1);
    }
  };
  const getStart = () => {
    dispatch({
      type: types.onBoardFinished,
    });
  };
  return {
    onBoardingData,
    onSnapToItem,
    currentIndex,
    getStart,
    goNext,
    flatListRef,
  };
};

export default useOnboardingScreen;
