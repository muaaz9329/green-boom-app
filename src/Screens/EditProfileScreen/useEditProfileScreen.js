import { useEffect, useState } from 'react';
import useFormHook from '../../Hooks/UseFormHooks';
import Schemas from '../../Utils/Validation';
import useReduxStore from '../../Hooks/UseReduxStore';
import { loadingFalse, loadingTrue } from '../../Redux/Action/isloadingAction';
import { successMessage } from '../../Config/NotificationMessage';
import { formDataFunc, SuccessFlashMessage } from '../../Utils/helperFunc';
import { launchImageLibrary } from 'react-native-image-picker';
import { types } from '../../Redux/types';
import { updateUser } from '../../Utils/Urls';
import { useSelector } from 'react-redux';
import { useLoading } from '../../providers/LoadingProvider';
import { apiService } from '../../network';
import { setUserData } from '../../Redux/Slices/userDataSlice';
import routes from '../../network/routes';
import useS3 from '../../Hooks/useS3';

/**
 * The `useEditProfileScreen` function in JavaScript is a custom hook that handles editing user profile
 * data, including uploading profile images and updating the profile information.
 * @returns The `useEditProfileScreen` function returns an object with the following properties:
 * - `handleSubmit`: Function for handling form submission
 * - `errors`: Errors object for form validation
 * - `reset`: Function for resetting form fields
 * - `control`: Control object for managing form inputs
 * - `getValues`: Function for getting current form field values
 * - `userData`: User data from the Redux store
 */
const useEditProfileScreen = ({ navigate, goBack }) => {
  const { dispatch, getState } = useReduxStore();

  const { userData } = useSelector(state => state?.userData);
  const { loading, setLoading } = useLoading();
  const { handleSubmit, errors, reset, control, getValues } = useFormHook(
    Schemas.editProfile,
  );
  const { uploadImageOnS3, uploadImage } = useS3();

  //GET IMAGE From Mobile
  const [profileData, setProfileData] = useState(null);
  const [image, setImage] = useState(null);
  /**
   * The function `uploadFromGalary` launches the image library to select a photo with specific
   * constraints and sets the selected image as profile data.
   */

  useEffect(() => {
    setProfileData(userData?.image);
  }, []);
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
          // console.log('imag222e', res.assets);
          setProfileData(res?.assets[0]?.uri);
        }
        // console.log(res?.assets[0]?.uri);
      },
    );
  };

  //UPDATE PROFILE
  /**
   * The function `updateProfileFunction` is an asynchronous function that updates a user's profile
   * data and handles success and error messages accordingly.
   */
  const updateProfileFunction = async currentValue => {
    setLoading(true);
    if (profileData) {
      const image = await uploadImage(profileData);
      setImage(image);
      console.log('image', image);
    } else {
      setImage(userData?.image);
    }
    console.log('I ran');
    const { name, last_name, email, company_name } = currentValue;
    if (
      userData?.name != name + ' ' + last_name ||
      userData?.email != email ||
      userData?.companyType != company_name ||
      userData?.image != profileData
    ) {
      console.log('i ran 2');
      apiService.Patch({
        url: routes.updateMe,
        setLoading,
        body: {
          name: name + ' ' + last_name,
          email,
          companyType: company_name,
          image: image,
        },
        OnSuccess: res => {
          dispatch(setUserData(res?.data?.user));
          SuccessFlashMessage('Profile Updated Successfully');
          goBack();
        },
        OnError: error => {
          console.log('error', error);
        },
      });
    } else {
      goBack();
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
