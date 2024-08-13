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

  const msdsDummyData = [
    {
      title: 'MSDS Sheet 1',
      file_type: 'pdf',
      file: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      image: 'https://img.icons8.com/color/452/pdf.png',
    },
    {
      title: 'MSDS Sheet 2',
      file_type: 'word',
      file: 'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.doc',
      image: 'https://img.icons8.com/color/452/ms-word.png',
    },
  ];
  // const {dispatch, getState} = useReduxStore();
  const {isloading} = {
    isloading: false,
  };

  /* The `useEffect` hook in the provided code snippet is used to perform side effects in a functional
  component. In this case, it is making use of the `dispatch` function to trigger the `getmsds`
  action when the component mounts for the first time. */
  // useEffect(() => {
  //   dispatch(getmsds());
  // }, []);

  const [category, setCategory] = useState(msdsDummyData);

  return {
    categoryData: params?.category,
    title: params?.title,
    isVideo: params?.isVideo,
    category,
    isloading,
  };
};

export default useMSDS;
