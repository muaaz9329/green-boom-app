import {useEffect, useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';

const useDemoKitSingleScreen = ({navigate, goBack}, {params}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook();

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
  };
};

export default useDemoKitSingleScreen;
