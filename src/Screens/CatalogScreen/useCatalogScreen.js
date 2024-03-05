import {useEffect, useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getcatalog} from '../../Redux/Action/contentAction';
import {trainingPDFIcon, wordIcon} from '../../Assets';

/**
 * The useCatalogScreen function retrieves category data and icon types for a catalog screen in a
 * JavaScript application.
 * @returns The `useCatalogScreen` function is returning an object with the following properties:
 * - `category`: an array of category data fetched from the Redux store
 * - `iconType`: an object mapping file types to corresponding icon components
 * - `isloading`: a boolean value indicating whether the data is currently being loaded
 */
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
