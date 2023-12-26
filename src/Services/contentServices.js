import {catalogBroucher, msdSheets, sendType} from '../Utils/Urls';

const {default: API} = require('../Utils/helperFunc');

const getCategoryApi = async title => {
  return await API.post(sendType, {type: title});
};
const getmsdsApi = async title => {
  return await API.get(msdSheets);
};

const getCatalogApi = async title => {
  return await API.get(catalogBroucher);
};

export {getCategoryApi, getmsdsApi, getCatalogApi};
