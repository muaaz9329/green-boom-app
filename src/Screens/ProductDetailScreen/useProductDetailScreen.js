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
  const [selectedSize, setSelectedSize] = useState({id: '', index: 0});
  const [remOption, setRemOption] = useState(false);
  const {getState} = useReduxStore();
  const {isloading} = {
    isloading: false,
  };

  const dummyProductData = {
    product_data: {
      product_name: 'Eco-friendly Notebook',
      description:
        'A durable notebook made from 100% recycled materials. Perfect for taking notes at work or school while being mindful of the environment.',
      title: 'Eco-friendly Notebook',
    },
    image: [
      {uri: 'https://via.placeholder.com/300x200'},
      {uri: 'https://via.placeholder.com/300x200'},
    ],
    sizePicker: [
      {id: 'small', title: 'Small'},
      {id: 'medium', title: 'Medium'},
      {id: 'large', title: 'Large'},
    ],
    small: [
      {
        size: [{sku_num: 'ECO123-S'}, {dimensions: '5 x 7 inches'}],
        dimension: [{weight: '0.5 lbs'}, {thickness: '0.5 inches'}],
        title: [{title_remediation: 'Small Eco-friendly Notebook'}],
        desc: [
          {
            sub_description: JSON.stringify([
              '100% recycled paper',
              '80 sheets',
              'Lined pages',
            ]),
          },
        ],
      },
    ],
    medium: [
      {
        size: [{sku_num: 'ECO123-M'}, {dimensions: '7 x 9 inches'}],
        dimension: [{weight: '0.7 lbs'}, {thickness: '0.5 inches'}],
        title: [{title_remediation: 'Medium Eco-friendly Notebook'}],
        desc: [
          {
            sub_description: JSON.stringify([
              '100% recycled paper',
              '100 sheets',
              'Lined pages',
            ]),
          },
        ],
      },
    ],
    large: [
      {
        size: [{sku_num: 'ECO123-L'}, {dimensions: '8.5 x 11 inches'}],
        dimension: [{weight: '1 lbs'}, {thickness: '0.75 inches'}],
        title: [{title_remediation: 'Large Eco-friendly Notebook'}],
        desc: [
          {
            sub_description: JSON.stringify([
              '100% recycled paper',
              '120 sheets',
              'Lined pages',
            ]),
          },
        ],
      },
    ],
  };

  // Product Bottom Section (similar to what might be in the productBottom variable)
  const productBottom = [
    {icon: 'https://via.placeholder.com/50', name: 'Eco-friendly'},
    {icon: 'https://via.placeholder.com/50', name: 'Durable Design'},
    {icon: 'https://via.placeholder.com/50', name: 'Recycled Materials'},
    {icon: 'https://via.placeholder.com/50', name: 'Sustainable'},
  ];

  const [productData, setProductData] = useState(dummyProductData);

  /**
   * The function `getSingleProduct` makes an asynchronous API call to retrieve a single product and
   * updates the selected size and product data based on the response.
   */
  // const getSingleProduct = async () => {
  //   const {ok, data} = await API.get(singleProduct + params);
  //   // console.log('all data', data);

  //   if (ok) {
  //     setSelectedSize({id: data?.sizePicker[0]?.id, index: 0});
  //     setProductData(data);
  //   }
  // };
  // /* The `useEffect` hook in the code snippet is used to perform side effects in functional components.
  // In this specific case, the `useEffect` hook is calling the `getSingleProduct` function when the
  // component mounts for the first time. */
  // useEffect(() => {
  //   getSingleProduct();
  // }, []);
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
