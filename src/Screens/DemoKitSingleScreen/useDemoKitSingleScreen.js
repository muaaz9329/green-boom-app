import {useEffect, useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import {kitForm} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import Schemas from '../../Utils/Validation';

const useDemoKitSingleScreen = ({navigate, goBack}, {params}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.demoKit,
  );



  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    // submitData,
  };
};

export default useDemoKitSingleScreen;
