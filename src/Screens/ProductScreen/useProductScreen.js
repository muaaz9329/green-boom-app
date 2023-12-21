import {useState} from 'react';
import {videosData} from '../../Utils/localDB';

const useMSDS = ({navigate, goBack}, {params}) => {
  return {
    title: params?.title,
  };
};

export default useMSDS;
