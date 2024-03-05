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
