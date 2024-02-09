import {useEffect, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getcatalog} from '../../Redux/Action/contentAction';
import {trainingPDFIcon, wordIcon} from '../../Assets';

const useCatalogScreen = ({navigate, goBack}) => {
  const iconType = {
    pdf: trainingPDFIcon,
    word: wordIcon,
  };
  const {dispatch, getState} = useReduxStore();
  const titleData = getState('getCategory');
  const {isloading} = getState('isloading');
  const category = titleData['catalog'] ?? [];
  console.log('cat', category);

  useEffect(() => {
    dispatch(getcatalog());
  }, []);

  return {
    category,
    iconType,
    isloading,
  };
};

export default useCatalogScreen;
