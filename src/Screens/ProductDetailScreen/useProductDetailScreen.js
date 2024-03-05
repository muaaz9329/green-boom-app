import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {singleProduct} from '../../Utils/Urls';
import useReduxStore from '../../Hooks/UseReduxStore';

/**
 * The function `useProductDetailScreen` is a custom hook in JavaScript that manages state for a
 * product detail screen, including fetching product data and handling selected size and loading state.
 * @returns The function `useProductDetailScreen` is returning an object with the following properties:
 * - `productData`
 * - `selectedSize`
 * - `setSelectedSize`
 * - `remOption`
 * - `setRemOption`
 * - `isloading`
 */
const useProductDetailScreen = ({navigate, goBack}, {params}) => {
  const [productData, setProductData] = useState();
  const [selectedSize, setSelectedSize] = useState({id: '', index: 0});
  const [remOption, setRemOption] = useState(false);
  const {getState} = useReduxStore();
  const {isloading} = getState('isloading');

  /**
   * The function `getSingleProduct` makes an asynchronous API call to retrieve a single product and
   * updates the selected size and product data based on the response.
   */
  const getSingleProduct = async () => {
    const {ok, data} = await API.get(singleProduct + params);
    // console.log('all data', data);

    if (ok) {
      setSelectedSize({id: data?.sizePicker[0]?.id, index: 0});
      setProductData(data);
    }
  };
  /* The `useEffect` hook in the code snippet is used to perform side effects in functional components.
  In this specific case, the `useEffect` hook is calling the `getSingleProduct` function when the
  component mounts for the first time. */
  useEffect(() => {
    getSingleProduct();
  }, []);
  return {
    productData,
    selectedSize,
    setSelectedSize,
    remOption,
    setRemOption,
    isloading,
  };
};

export default useProductDetailScreen;
