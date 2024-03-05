import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import Orientation from 'react-native-orientation-locker';

/**
 * The function `useSingleVideoScreen` manages the orientation of the screen based on the device's
 * orientation and returns whether the screen is in portrait mode or not.
 * @returns The function `useSingleVideoScreen` returns an object with a single property `isPortrait`,
 * which is derived from the state variable `isPortrait` using the `useState` hook. The function also
 * includes an `useEffect` hook to handle orientation changes and update the `isPortrait` state
 * accordingly.
 */
const useSingleVideoScreen = ({navigate, goBack}, {params}) => {
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

export default useSingleVideoScreen;
