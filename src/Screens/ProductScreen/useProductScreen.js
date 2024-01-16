import {useEffect, useState} from 'react';
import {videosData} from '../../Utils/localDB';
import {productListApi} from '../../Utils/Urls';
import API from '../../Utils/helperFunc';

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
