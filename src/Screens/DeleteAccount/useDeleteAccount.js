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
import {setLogout} from '../../Redux/Slices/userDataSlice';

/**
 * The function `useChangePasswordScreen` handles the process of changing a user's password, including
 * form validation, reauthentication, and updating the password in a JavaScript application.
 * @returns The function `useChangePasswordScreen` is returning an object with the following properties
 * and values:
 */
const useDeleteAccount = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.deleteAccount,
  );

  const {dispatch} = useReduxStore();
  const {loading, setLoading} = useLoading();
  const deleteAccount = async currentPassword => {
    console.log('pass');
    // setLoading(true);
    const {password} = currentPassword;
    console.log({password});
    apiService.Delete({
      url: routes.deleteUser + `?password=${password}`,
      setLoading,
      OnSuccess: res => {
        SuccessFlashMessage('Account Delete Successfully');
        dispatch(setLogout());
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
    deleteAccount,
  };
};

export default useDeleteAccount;
