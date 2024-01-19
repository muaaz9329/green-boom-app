import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';

const useMyProfileScreen = ({navigate, goBack}) => {
  const [alert, setAlert] = useState(false);
  const {dispatch, getState} = useReduxStore();

  const {userData} = getState('Auth');
  console.log('userData', userData);
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
