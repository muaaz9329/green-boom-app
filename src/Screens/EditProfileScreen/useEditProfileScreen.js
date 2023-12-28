import {useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import Schemas from '../../Utils/Validation';

const useEditProfileScreen = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.editProfile,
  );
  return {handleSubmit, errors, reset, control, getValues};
};

export default useEditProfileScreen;
