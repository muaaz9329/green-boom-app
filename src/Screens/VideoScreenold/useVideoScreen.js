import {useState} from 'react';

const useVideo = ({navigate, goBack}, {params}) => {
  const isCategory = Boolean(params.category);
  return {isCategory, categoryData: params.category};
};

export default useVideo;
