import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {orderKit} from '../../Utils/Urls';
import useReduxStore from '../../Hooks/UseReduxStore';

/**
 * The function `useDemoKitScreen` retrieves kit data and loading status from Redux store and returns
 * them along with the screen title.
 * @returns The function `useDemoKitScreen` is returning an object with the following properties:
 * - `title`: The value of `params.title`
 * - `kitData`: The state variable initialized with an empty array and updated with data fetched from
 * an API call
 * - `isloading`: The value of `isloading` obtained from the Redux store
 */
const useDemoKitScreen = ({navigate, goBack}, {params}) => {
  const {dispatch, getState} = useReduxStore();

  const {isloading} = getState('isloading');

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
    isloading,
  };
};

export default useDemoKitScreen;
