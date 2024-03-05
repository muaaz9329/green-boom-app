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

/**
 * The function `useTraining` retrieves and manages training data for a specific category and
 * subcategory, including handling API calls and state updates.
 * @returns The function `useTraining` is returning an object with the following properties:
 */
const useTraining = ({navigate, goBack}, {params}) => {
  const {dispatch, getState} = useReduxStore();
  const titleData = getState('getCategory');
  const {isloading} = getState('isloading');
  const category = titleData[params?.id]?.cat ?? [];
  const subCategory = titleData[params?.id]?.subCat ?? [];

  const isCategory = Boolean(category.length > 0);
  const iconType = {
    pdf: trainingPDFIcon,
    word: wordIcon,
    ppt: ppt,
  };
  const scriptIconType = {
    email: emailS,
    call: callS,
    voicemail: microphoneS,
    sms: messageS,
  };
  const [accordionItem, setAccordionItem] = useState('');

  const [subCat, setSubCat] = useState(null);
  const [activeBtn, setActiveBtn] = useState({});

  /**
   * The function `onCategory` sets an active button, makes a POST request to an API, and updates the
   * subcategory data based on the response.
   */
  const onCategory = async item => {
    setActiveBtn(item);
    const {ok, data} = await API.post(tabButtonType, {
      id: item?.id,
      type: params.id,
    });
    if (ok) {
      setSubCat(data.data);
      subCategory = data.data;
    }
  };
  /* The `useEffect` hook in the provided code snippet is responsible for dispatching an action to get
  category data and setting an active button based on the retrieved data. Here's a breakdown of what
  it does: */
  useEffect(() => {
    dispatch(getCategory(params?.id));
    if (titleData[params?.id]?.cat?.length > 0) {
      setActiveBtn({
        id: titleData[params?.id]?.cat[0]?.id,
        title: titleData[params?.id]?.cat[0]?.title,
      });
    }
  }, [
    titleData[params?.id]?.cat?.length > 0 && titleData[params?.id]?.cat[0]?.id,
  ]);

  return {
    isCategory,
    categoryData: params?.category,
    title: params?.title,
    isVideo: params?.isVideo,
    category,
    subCategory: subCat ?? subCategory,
    iconType,
    onCategory,
    activeBtn,
    accordionItem,
    setAccordionItem,
    scriptIconType,
    isloading,
  };
};

export default useTraining;
