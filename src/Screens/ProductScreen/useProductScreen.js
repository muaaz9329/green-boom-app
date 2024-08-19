import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import {productListApi} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';
import {apiService} from '../../network';
import routes from '../../network/routes';

/**
 * The function `useMSDS` fetches a list of products and returns the product list along with the title
 * from the parameters.
 * @returns The `useMSDS` function is returning an object with two properties:
 * 1. `title`: The value of `params?.title`
 * 2. `productList`: The state variable `productList` created using `useState`, which is initialized as
 * an empty array and updated with data fetched from an API in the `productListing` function.
 */
const useMSDS = ({navigate, goBack}, {params}) => {
  const [isLoading, setIsLoading] = useState(true);

  const dummyProductList = [
    {
      id: 1,
      product_name: 'Eco-friendly Notebook',
      short_description: 'A sustainable notebook made from recycled materials.',
      file: 'https://via.placeholder.com/150', // Placeholder image URL
    },
    {
      id: 2,
      product_name: 'Solar Charger',
      short_description: 'Charge your devices with solar power.',
      file: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      product_name: 'Reusable Water Bottle',
      short_description: 'Keep hydrated with this eco-friendly bottle.',
      file: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      product_name: 'Bamboo Toothbrush',
      short_description: 'An eco-friendly alternative to plastic toothbrushes.',
      file: 'https://via.placeholder.com/150',
    },
  ];

  const [productList, setProductList] = useState([]);
  // const productListing = async () => {
  //   const {ok, data} = await API.get(productListApi);
  //   // console.log('productlist data', data);

  //   if (ok) {
  //     setProductList(data);
  //   } else {
  //     // console.log('productlist err', error);
  //   }
  // };
  // useEffect(() => {
  //   productListing();
  // }, []);

  useEffect(() => {
    apiService.Get({
      url: routes.product,
      setLoading: setIsLoading,
      onError: error => {
        console.log('error', error);
      },
      OnSuccess: response => {
        console.log('response', response?.data?.product);
        setProductList(response?.data?.product);
      },
    });
  }, []);

  return {
    title: params?.title,
    productList,
    isLoading,
  };
};

export default useMSDS;
