import {useEffect, useRef, useState} from 'react';
import {homeScreenBtns} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {welcomeVideo} from '../../Utils/Urls';
import NavigationService from '../../Services/NavigationService';
import useReduxStore from '../../Hooks/UseReduxStore';
import {apiService} from '../../network';
import routes from '../../network/routes';
import {useLoading} from '../../providers/LoadingProvider';
import {useSelector} from 'react-redux';

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
  const [homeData, setHomeData] = useState({
    dashboardCatalog:
      'https://www.greenboom.nl/_files/ugd/52f9d0_5d08e2b65d4b4372b9652f3bb79fc81f.pdf',
    dashboardVideoThumb:
      'https://greenboom-bucket.s3.us-east-2.amazonaws.com/1723845403217.png',
    dashboardVideoUrl:
      'https://www.youtube.com/watch?v=PEnJbjBuxnw&list=RD60vIVA5AZ9M&index=4',
  });
  const {getState} = useReduxStore();
  const {loading, setLoading} = useLoading();

  const {isVideo} = {};

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
  }, []);

  /**
   * The function `VideoData` asynchronously fetches a welcome video using an API and sets the video
   * URL if the request is successful.
   */
  const VideoData = async () => {
    await apiService.Get({
      url: routes.getHomeData,
      setLoading,

      onError: error => {
        console.log('error', error);
      },
      OnSuccess: response => {
        console.log('response', response?.data?.dash[0]);
        setHomeData(response?.data?.dash[0]);
        // setVideoUrl(response?.data?.welcome_video);
      },
    });
  };

  /* The `useEffect(() => { VideoData(); }, []);` code snippet in the provided JavaScript function
  `useHomeScreen` is utilizing the `useEffect` hook in React. */
  useEffect(() => {
    VideoData();
  }, []);

  const {accessToken} = useSelector(state => state.userData);
  useEffect(() => {
    console.log('accessToken ', accessToken);
  }, []);

  return {
    homeScreenBtns,
    onPress,
    videoOn,
    setVideoOn,
    videoP,
    videoUrl,
    videoPlayerRef,
    homeData,
  };
};

export default useHomeScreen;
