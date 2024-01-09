import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {singleProduct} from '../../Utils/Urls';

const useProductDetailScreen = ({navigate, goBack}, {params}) => {
  const getSingleProduct = async () => {
    const {ok, data} = await API.get(singleProduct + params);
    console.log('adara', data);
    if (ok) {
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return {};
};

export default useProductDetailScreen;
