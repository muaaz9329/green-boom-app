import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import Orientation from 'react-native-orientation-locker';

/**
 * The function `useDemoKitVideoScreen` manages the orientation of a video screen based on the device's
 * orientation and category parameters.
 * @returns The function `useDemoKitVideoScreen` is returning an object with a single property
 * `isPortrait`, which is a boolean value indicating whether the device orientation is portrait or not.
 */
const useDemoKitVideoScreen = ({navigate, goBack}, {params}) => {
  const isCategory = Boolean(params.category);
  // console.log('first asdasdas', videosData.category[1].id);

  const [isPortrait, setIsPortrait] = useState(true);
  useEffect(() => {
    const handleOrientationChange = orientation => {
      setIsPortrait(orientation === 'PORTRAIT');
    };

    // Set initial orientation
    handleOrientationChange(Orientation.getInitialOrientation());

    // Add listener for orientation change
    Orientation.addOrientationListener(handleOrientationChange);

    // Clean up on component unmount
    return () => {
      Orientation.removeOrientationListener(handleOrientationChange);
    };
  }, []);

  return {
    isPortrait,
  };
};

export default useDemoKitVideoScreen;
