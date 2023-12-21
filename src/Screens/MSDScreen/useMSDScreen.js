import {useState} from 'react';
import {videosData} from '../../Utils/localDB';

const useMSDS = ({navigate, goBack}, {params}) => {
  const isCategory = Boolean(params.category);
  console.log('first asdasdas', videosData.category[1].id);
  return {
    isCategory,
    categoryData: params?.category,
    title: params?.title,
    isVideo: params?.isVideo,
  };
};

export default useMSDS;
