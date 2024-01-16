import {useEffect, useState} from 'react';
import API from '../../Utils/helperFunc';
import {singleProduct} from '../../Utils/Urls';

const useProductDetailScreen = ({navigate, goBack}, {params}) => {
  const [productData, setProductData] = useState();
  const [selectedSize, setSelectedSize] = useState({id: '', index: 0});
  const [remOption, setRemOption] = useState(false);

  const getSingleProduct = async () => {
    const {ok, data} = await API.get(singleProduct + params);

    console.log('all data', data?.small[0]?.desc[0]?.sub_description);

    if (ok) {
      setSelectedSize({id: data?.sizePicker[0]?.id, index: 0});
      setProductData(data);
    }
  };
  useEffect(() => {
    getSingleProduct();
  }, []);
  return {productData, selectedSize, setSelectedSize, remOption, setRemOption};
};

export default useProductDetailScreen;
