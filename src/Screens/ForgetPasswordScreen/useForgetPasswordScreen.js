import {firebase} from '@react-native-firebase/auth';
import {loadingFalse, loadingTrue} from '../../Redux/Action/isloadingAction';
import {successMessage, errorMessage} from '../../Config/NotificationMessage';
import useReduxStore from '../../Hooks/UseReduxStore';
import auth from '@react-native-firebase/auth';
import {forgotPasswordAction} from '../../Redux/Action/AuthAction';

const {default: useFormHook} = require('../../Hooks/UseFormHooks');
const {default: Schemas} = require('../../Utils/Validation');

/**
 * The function `useForgotPasswordScreen` returns necessary hooks and functions for handling a forgot
 * password screen in a JavaScript application.
 * @returns The function `useForgotPasswordScreen` is returning an object with the following properties
 * and methods:
 */
const useForgotPasswordScreen = ({navigate, goBack}) => {
  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.forgot,
  );
  const {dispatch} = useReduxStore();

  /**
   * The `forgotPassword` function dispatches a `forgotPasswordAction` with the provided email as a
   * parameter.
   */
  const forgotPassword = ({email}) => {
    dispatch(forgotPasswordAction(email));
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    goBack,
    forgotPassword,
  };
};

export default useForgotPasswordScreen;
