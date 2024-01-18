import {useEffect, useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import {kitForm} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

const useDemoKitSingleScreen = ({navigate, goBack}, {params}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook();

  const submitData = async data => {
    try {
      // Perform the API call to post data
      const response = await API.post(kitForm, data);

      if (response.ok) {
        // Handle success
        console.log('Data posted successfully:', response.data);
      } else {
        // Handle error
        console.error('Error posting data:', response.problem);
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    submitData,
  };
};

export default useDemoKitSingleScreen;
