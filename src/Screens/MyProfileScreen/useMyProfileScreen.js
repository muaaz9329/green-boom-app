import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';

/**
 * The function `useMyProfileScreen` returns values and functions related to user profile management,
 * including handling alerts and user data.
 * @returns The `useMyProfileScreen` function is returning an object with the following properties and
 * methods:
 * - `onCancel`: a function that toggles the `alert` state
 * - `onConfirm`: a function that sets `alert` to false and then logs out the user after a delay
 * - `alert`: a boolean state variable
 * - `userData`: the user data obtained from the Redux store
 */
const useMyProfileScreen = ({navigate, goBack}) => {
  const [alert, setAlert] = useState(false);
  const {dispatch, getState} = useReduxStore();

  const {userData} = getState('Auth');
  // console.log('userData', userData);
  const onConfirm = () => {
    setAlert(false);
    setTimeout(async () => {
      await logoutService();
      dispatch(logOutUser());
    }, 900);
  };
  const onCancel = () => {
    setAlert(!alert);
  };

  return {onCancel, onConfirm, alert, userData};
};

export default useMyProfileScreen;
