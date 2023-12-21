import {useState} from 'react';

const useDemoKitScreen = ({navigate, goBack}, {params}) => {
  return {
    title: params?.title,
  };
};

export default useDemoKitScreen;
