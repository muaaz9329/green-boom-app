import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {orderKit} from '../../Utils/Urls';

const useDemoKitScreen = ({navigate, goBack}, {params}) => {
  const [kitData, setKitData] = useState([]);
  const kitDataFunc = async () => {
    const {ok, data} = await API.get(orderKit);
    if (ok) {
      setKitData(data?.order_kit_list);
    }
  };
  useEffect(() => {
    kitDataFunc();
  }, []);
  return {
    title: params?.title,
    kitData,
  };
};

export default useDemoKitScreen;
