import {useState} from 'react';
import useReduxStore from '../../Hooks/UseReduxStore';
import {logOutUser} from '../../Redux/Action/AuthAction';
import {logoutService} from '../../Services/AuthServices';

const useSettingScreen = ({navigate, goBack}) => {
  const [alert, setAlert] = useState(false);
  const {dispatch} = useReduxStore();

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
  const tabScreen = item => {
    if (item?.screenUrl !== '') {
      navigate(item?.screenUrl);
      console.log('asdaa', item?.screenUrl);
    } else {
      onCancel();
      console.log('asd asd');
    }
  };
  return {onCancel, onConfirm, tabScreen, alert};
};

export default useSettingScreen;
