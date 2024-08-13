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

    const dummyData = [
      {
        name: 'Learn JavaScript in 1 Hour',
        price: 0.0,
        thumb: 'https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=W6NZfCO5SIk',
        content:
          'A beginner-friendly introduction to JavaScript covering the basics of programming.',
      },
      {
        name: 'React JS Crash Course',
        price: 0.0,
        thumb: 'https://img.youtube.com/vi/Dorf8i6lCuk/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=Dorf8i6lCuk',
        content:
          'Comprehensive React crash course covering hooks, components, and state management.',
      },
      {
        name: 'Node.js Tutorial for Beginners',
        price: 0.0,
        thumb: 'https://img.youtube.com/vi/TlB_eWDSMt4/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TlB_eWDSMt4',
        content:
          'An in-depth guide to getting started with Node.js, including server creation and modules.',
      },
      {
        name: 'Build a MERN Stack App',
        price: 0.0,
        thumb: 'https://img.youtube.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=7CqJlxBYj-M',
        content:
          'Step-by-step tutorial on building a full-stack application using MongoDB, Express, React, and Node.js.',
      },
      {
        name: 'Introduction to Cloud Computing',
        price: 0.0,
        thumb: 'https://img.youtube.com/vi/gu4FYSFeWqg/maxresdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=gu4FYSFeWqg',
        content:
          'An introductory course on cloud computing, exploring various cloud service models and providers.',
      },
    ];

    setVideosData(dummyData);
  }, []);

  return {
    title: params?.title,
    isVideo: params?.isVideo,
    videosData,
    isloading,
  };
};

export default useTraining;
