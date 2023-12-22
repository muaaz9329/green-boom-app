import {types} from '../types';

export const getCategory = payload => ({
  type: types.trainingCat,
  payload,
});
