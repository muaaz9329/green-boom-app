import {useState} from 'react';
import {getFbResult, logOutFirebase} from '../../Services/AuthServices';
import useReduxStore from '../../Hooks/UseReduxStore';
import {loginUser, registerUser} from '../../Redux/Action/AuthAction';
import {useDispatch} from 'react-redux';
import {apiService} from '../../network';
import {useLoading} from '../../providers/LoadingProvider';
import routes from '../../network/routes';
import {ErrorFlashMessage, SuccessFlashMessage} from '../../Utils/helperFunc';
import {
  refreshToken,
  setAccessToken,
  setIsLoggedIn,
  setUserData,
} from '../../Redux/Slices/userDataSlice';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');

/**
 * The `useLogin` function is a custom hook in JavaScript that handles user login functionality,
 * including form validation, state management, and navigation.
 * @returns The `useLogin` function is returning an object with the following properties and methods:
 */
const useLogin = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.logIn,
  );
  const dispatch = useDispatch();
  const [remember, setRemember] = useState(true);
  const rememberValue = () => {
    setRemember(!remember);
  };

  const onPress = () => navigate('RegisterScreen');
  const {loading, setLoading} = useLoading();
  /**
   * The `loginUserFun` function dispatches an action to register a user with the provided email and
   * password.
   */
  const loginUserFun = ({email, password}) => {
    apiService.Post({
      url: routes.signIn,
      setLoading,
      body: {
        email,
        password,
      },
      OnSuccess: res => {
        SuccessFlashMessage('Logged in Successful');
        dispatch(setAccessToken(res?.data?.token));
        dispatch(refreshToken(res?.data?.refreshToken));
        dispatch(setUserData(res?.data?.user));
        dispatch(setIsLoggedIn(true));
      },
      OnError: error => {
        console.log(error);
        ErrorFlashMessage('Error', error);
      },
    });
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    PhoneNumberLoginFuc: () => {},
    remember,
    setRemember,
    rememberValue,
    onPress,
    loginUser: loginUserFun,
  };
};

export default useLogin;
