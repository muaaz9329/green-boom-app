import {useState} from 'react';
import {loginUser} from '../../Redux/Action/AuthAction';
import useReduxStore from '../../Hooks/UseReduxStore';
import {errorMessage} from '../../Config/NotificationMessage';
import {apiService} from '../../network';
import routes from '../../network/routes';
import {useLoading} from '../../providers/LoadingProvider';
import {ErrorFlashMessage, SuccessFlashMessage} from '../../Utils/helperFunc';
import {useDispatch} from 'react-redux';
import {
  refreshToken,
  setAccessToken,
  setUserData,
} from '../../Redux/Slices/userDataSlice';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');

/**
 * The function `useRegister` handles form submission, user registration, navigation, and policy
 * agreement in a React application.
 * @returns The `useRegister` function is returning an object with the following properties and
 * methods:
 */
const useRegister = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.signUp,
  );
  const dispatch = useDispatch();
  const [remember, setRemember] = useState(false);
  const rememberValue = () => {
    setRemember(!remember);
  };
  const {loading, setLoading} = useLoading();
  const signUpButton = ({
    name,
    last_name,
    email,
    number,
    password,
    confirm_password,
    company_name,
  }) => {
    if (!policy) {
      apiService.Post({
        url: routes.signUp,
        setLoading,
        body: {
          name: name + ' ' + last_name,
          email,
          password,
          companyType: company_name,
          accountType: 'user',
          number: '',
        },
        OnSuccess: res => {
          SuccessFlashMessage('User Registered Successfully');
          dispatch(setAccessToken(res?.data?.token));
          dispatch(refreshToken(res?.data?.refreshToken));
          dispatch(setUserData(res?.data?.user));
          loginNav();
        },
        OnError: res => {
          ErrorFlashMessage('User Registration Failed', res);
          console.log(res);
        },
      });
    } else errorMessage('Please agree terms & conditions.');
  };
  const loginNav = () => navigate('LoginScreen');

  const [policy, setPolicy] = useState(true);
  const PolicyValue = () => {
    setPolicy(!policy);
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    facebookLoginFunc: () => {},
    googleLoginFunc: () => {},
    PhoneNumberLoginFuc: () => {},
    remember,
    setRemember,
    rememberValue,
    goBack,
    loginNav,
    signUpButton,
    PolicyValue,
    policy,
  };
};

export default useRegister;
