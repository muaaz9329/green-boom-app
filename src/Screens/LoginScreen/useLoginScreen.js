// import {errorMessage} from '../../Components/NotificationMessage';
// import {loginUser} from '../../Redux/Actions/AuthAction';
// import API from '../../Utils/helperFunction';
// import {
//   faceBookLogin,
//   googleLogin,
//   PhoneNumberLogin,
//   verifyCode,
// } from '../../Utils/SocialLogin';
// import {loginUrl} from '../../Utils/Url';
// import {
//   appleIdlogin,
//   faceBookLogin,
//   googleLogin,
// } from '../../Utils/SocialLogin';
import {useState} from 'react';
import {getFbResult, logOutFirebase} from '../../Services/AuthServices';
import useReduxStore from '../../Hooks/UseReduxStore';
import {loginUser, registerUser} from '../../Redux/Action/AuthAction';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');

const useLogin = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.logIn,
  );
  const {dispatch} = useReduxStore();
  const [remember, setRemember] = useState(true);
  const rememberValue = () => {
    setRemember(!remember);
  };

  const onPress = () => navigate('RegisterScreen');

  const loginUserFun = ({email, password}) => {
    dispatch(registerUser({datas: {email, password}}));
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    // facebookLoginFunc,
    // googleLoginFunc,
    PhoneNumberLoginFuc: () => {},
    remember,
    setRemember,
    rememberValue,
    onPress,
    loginUser: loginUserFun,
    // appleIdlogin,
  };
};

export default useLogin;
