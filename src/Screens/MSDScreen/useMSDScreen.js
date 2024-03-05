import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getCategory, getmsds} from '../../Redux/Action/contentAction';
import {trainingPDFIcon, wordIcon} from '../../Assets';

/**
 * The function `useMSDS` retrieves data related to MSDS sheets and returns relevant information for
 * rendering.
 * @returns The function `useMSDS` is returning an object with the following properties:
 */
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

  /* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
  component. In this case, it is making use of the `dispatch` function to trigger the `getmsds`
  action when the component mounts for the first time. */
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
