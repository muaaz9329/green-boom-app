import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {singleProduct} from '../../Utils/Urls';

const useProductDetailScreen = ({navigate, goBack}, {params}) => {
  const [productData, setProductData] = useState();

  const getSingleProduct = async () => {
    const {ok, data} = await API.get(singleProduct + params);
    // console.log('all data', data);

    if (ok) {
      setProductData(data);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return {productData};
};

export default useProductDetailScreen;
