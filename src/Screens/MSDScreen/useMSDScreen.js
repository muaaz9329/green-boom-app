import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getCategory, getmsds} from '../../Redux/Action/contentAction';
import {trainingPDFIcon, wordIcon} from '../../Assets';

const useMSDS = ({navigate, goBack}, {params}) => {
  const iconType = {
    pdf: trainingPDFIcon,
    word: wordIcon,
  };
  const {dispatch, getState} = useReduxStore();
  const {isloading} = getState('isloading');
  const titleData = getState('getCategory');
  const category = titleData['msdSheets'] ?? [];
  const isCategory = Boolean(params.category);
  // console.log('cat', category);

  useEffect(() => {
    dispatch(getmsds());
  }, []);

  return {
    isCategory,
    categoryData: params?.category,
    title: params?.title,
    isVideo: params?.isVideo,
    category,
    iconType,
    isloading,
  };
};

export default useMSDS;
