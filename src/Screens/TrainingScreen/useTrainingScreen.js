import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import API from '../../Utils/helperFunc';
import {sendType, tabButtonType} from '../../Utils/Urls';
import useReduxStore from '../../Hooks/UseReduxStore';
import {getCategory} from '../../Redux/Action/contentAction';
import {trainingPDFIcon, wordIcon} from '../../Assets';

const useTraining = ({navigate, goBack}, {params}) => {
  const {dispatch, getState} = useReduxStore();
  const titleData = getState('getCategory');
  const category = titleData[params?.title]?.cat ?? [];
  const subCategory = titleData[params?.title]?.subCat ?? [];
  console.log('first', subCategory);
  const isCategory = Boolean(category.length > 0);
  const iconType = {
    pdf: trainingPDFIcon,
    word: wordIcon,
  };

  const [subCat, setSubCat] = useState(null);
  const [activeBtn, setActiveBtn] = useState(category[0]?.id);
  const onCategory = async item => {
    setActiveBtn(item.id);
    const {ok, data} = await API.get(tabButtonType + item?.id);
    if (ok) {
      setSubCat(data.data);
      subCategory = data.data;
    }
  };

  // console.log('asdtest', titleData[params.title]?.cat[0]);
  useEffect(() => {
    dispatch(getCategory(params?.title));
  }, []);

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
  };
};

export default useTraining;
