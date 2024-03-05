import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import {productListApi} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

/**
 * The function `useMSDS` fetches a list of products and returns the product list along with the title
 * from the parameters.
 * @returns The `useMSDS` function is returning an object with two properties:
 * 1. `title`: The value of `params?.title`
 * 2. `productList`: The state variable `productList` created using `useState`, which is initialized as
 * an empty array and updated with data fetched from an API in the `productListing` function.
 */
const useMSDS = ({navigate, goBack}, {params}) => {
  const [productList, setProductList] = useState([]);

  const productListing = async () => {
    const {ok, data} = await API.get(productListApi);
    // console.log('productlist data', data);

    if (ok) {
      setProductList(data);
    } else {
      // console.log('productlist err', error);
    }
  };
  useEffect(() => {
    productListing();
  }, []);

  return {
    title: params?.title,
    productList,
  };
};

export default useMSDS;
