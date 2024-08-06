import {useState} from 'react';
import Schemas from '../../Utils/Validation';
import useFormHook from '../../Hooks/UseFormHooks';
import useReduxStore from '../../Hooks/UseReduxStore';
import {firebase} from '@react-native-firebase/auth';
import {loadingFalse, loadingTrue} from '../../Redux/Action/isloadingAction';
import {successMessage, errorMessage} from '../../Config/NotificationMessage';
import {useLoading} from '../../providers/LoadingProvider';
import {apiService} from '../../network';
import routes from '../../network/routes';
import {ErrorFlashMessage, SuccessFlashMessage} from '../../Utils/helperFunc';

/**
 * The function `useChangePasswordScreen` handles the process of changing a user's password, including
 * form validation, reauthentication, and updating the password in a JavaScript application.
 * @returns The function `useChangePasswordScreen` is returning an object with the following properties
 * and values:
 */
const useChangePasswordScreen = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.newPassword,
  );

  const {dispatch} = useReduxStore();
  const {loading, setLoading} = useLoading();
  const changePassword = async currentPassword => {
    console.log('pass');
    setLoading(true);
    const {password, new_password} = currentPassword;
    apiService.Patch({
      url: routes.updatePassword,
      setLoading,
      body: {
        currentPassword: password,
        password: new_password,
      },
      OnSuccess: res => {
        SuccessFlashMessage('Password Updated Successfully');
        goBack();
      },
      OnError: err => {
        ErrorFlashMessage('Error', err);
      },
    });
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    changePassword,
  };
};

export default useChangePasswordScreen;
