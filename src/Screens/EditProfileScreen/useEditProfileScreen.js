import {useState} from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import Schemas from '../../Utils/Validation';
import useReduxStore from '../../Hooks/UseReduxStore';
import {loadingFalse, loadingTrue} from '../../Redux/Action/isloadingAction';
import {successMessage} from '../../Config/NotificationMessage';
import {formDataFunc} from '../../Utils/helperFunc';
import {launchImageLibrary} from 'react-native-image-picker';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {types} from '../../Redux/types';
import {updateUser} from '../../Utils/Urls';

const useEditProfileScreen = ({navigate, goBack}) => {
  const {dispatch, getState} = useReduxStore();

  const {userData} = getState('Auth');

  const {handleSubmit, errors, reset, control, getValues} = useFormHook(
    Schemas.editProfile,
  );

  //GET IMAGE From Mobile
  const [profileData, setProfileData] = useState(null);
  const uploadFromGalary = () => {
    launchImageLibrary(
      {
        selectionLimit: 1,
        mediaType: 'photo',
        maxWidth: 300,
        maxHeight: 300,
      },
      res => {
        if (!res?.didCancel) {
          console.log('imag222e', res.assets);
          setProfileData(res?.assets[0]);
        }
      },
    );
  };

  //UPDATE PROFILE
  const updateProfileFunction = async currentValue => {
    try {
      dispatch(loadingTrue());
      console.log('currentValuecurrentValuecurrentValue', currentValue);
      const {ok, data} = await formDataFunc(
        updateUser,
        {...currentValue, profileData},
        'profile_image',
      );
      console.log(ok, data, 'uueueue');
      if (ok && data?.user) {
        dispatch(loadingFalse());
        successMessage(data.message);
        dispatch({type: types.UpdateProfile, payload: data.user});
      } else {
        dispatch(loadingFalse());
        errorMessage(data?.message);
      }
    } catch (e) {
      dispatch(loadingFalse());
      errorMessage(e.message.split(' ').slice(1).join(' ') ?? e);
    }
  };

  return {
    handleSubmit,
    errors,
    reset,
    control,
    getValues,
    userData,
    updateProfileFunction,
    uploadFromGalary,
    profileData,
  };
};

export default useEditProfileScreen;
