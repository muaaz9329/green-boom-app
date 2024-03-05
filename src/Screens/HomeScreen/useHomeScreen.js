import {useEffect, useRef, useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {welcomeVideo} from '../../Utils/Urls';
import NavigationService from '../../Services/NavigationService';
import useReduxStore from '../../Hooks/UseReduxStore';

/**
 * The `useHomeScreen` function in JavaScript sets up functionality for a home screen, including video
 * handling and navigation.
 * @returns The `useHomeScreen` function is returning an object with the following properties and
 * methods:
 * - `homeScreenBtns`: a variable containing data related to home screen buttons
 * - `onPress`: a function that takes a screen and an item as arguments and navigates to the specified
 * screen
 * - `videoOn`: a boolean state variable initialized to `false`
 * - `setVideoOn`: a
 */
const useHomeScreen = ({navigate}) => {
  const onPress = (screen, item) => navigate(screen, item);
  const [videoOn, setVideoOn] = useState(false);
  const [videoUrl, setVideoUrl] = useState([]);
  const {getState} = useReduxStore();

  const {isVideo} = getState('isVideo');

  const videoP = () => {
    console.log('test1');
  };

  const videoPlayerRef = useRef();

  /* The `useEffect` hook in the provided code snippet is monitoring the `isVideo` state variable for
  changes. When `isVideo` changes, the effect function inside the `useEffect` hook is triggered. */
  useEffect(() => {
    if (videoPlayerRef.current && !videoPlayerRef.current.state.paused) {
      videoPlayerRef.current.handlePlayer();
    }
  }, [isVideo]);

  /**
   * The function `VideoData` asynchronously fetches a welcome video using an API and sets the video
   * URL if the request is successful.
   */
  const VideoData = async () => {
    const {ok, data} = await API.get(welcomeVideo);

    if (ok) {
      setVideoUrl(data);
    }
  };

  /* The `useEffect(() => { VideoData(); }, []);` code snippet in the provided JavaScript function
  `useHomeScreen` is utilizing the `useEffect` hook in React. */
  useEffect(() => {
    VideoData();
  }, []);

  return {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
    videoUrl,
    videoPlayerRef,
  };
};

export default useHomeScreen;
