import {sendType} from '../Utils/Urls';

const {default: API} = require('../Utils/helperFunc');

const getCategoryApi = async title => {
  return await API.post(sendType, {type: title});
};

export {getCategoryApi};
