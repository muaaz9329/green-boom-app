import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {sendType, tabButtonType} from '../../Utils/Urls';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getCategory} from '../../Redux/Action/contentAction';
import {
  callS,
  emailS,
  messageS,
  microphoneS,
  ppt,
  trainingPDFIcon,
  wordIcon,
} from '../../Assets';
import {apiService} from '../../network';
import routes from '../../network/routes';

/**
 * The function `useTraining` retrieves and manages training data for a specific category and
 * subcategory, including handling API calls and state updates.
 * @returns The function `useTraining` is returning an object with the following properties:
 */
const useTraining = ({navigate, goBack}, {params}) => {
  const [isloading, setLoading] = useState(false);
  const [videosData, setVideosData] = useState([]);
  useEffect(() => {
    // apiService.Get({
    //   url:routes
    // })

    apiService.Get({
      url: routes.video,
      setLoading,
      onError: error => {
        console.log('error', error);
      },
      OnSuccess: response => {
        console.log('response', response);
        setVideosData(response?.data?.video);
      },
    });
  }, []);

  return {
    title: params?.title,
    isVideo: params?.isVideo,
    videosData,
    isloading,
  };
};

export default useTraining;
