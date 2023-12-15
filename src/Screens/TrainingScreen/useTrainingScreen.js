import {useState} from 'react';

const useTraining = ({navigate, goBack}, {params}) => {
  const isCategory = Boolean(params.category);
  return {isCategory, categoryData: params.category};
};

export default useTraining;
