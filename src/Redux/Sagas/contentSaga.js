const {put, call, takeLatest} = require('redux-saga/effects');
const {loadingTrue, loadingFalse} = require('../Action/isloadingAction');
const {errorMessage} = require('../../Config/NotificationMessage');
const {
  getCategoryApi,
  getmsdsApi,
  getCatalogApi,
} = require('../../Services/contentServices');
const {types} = require('../types');
const dataType = {
  Training: 'Training',
  Video: 'Video',
  msdSheets: 'msdSheets',
  catalog: 'catalog',
  salespitch: 'salespitch',
};
const getTrainingData = function* ({payload}) {
  yield put(loadingTrue());
  try {
    const {ok, data} = yield call(getCategoryApi, dataType[payload]);
    console.log('dta', data, 'type', dataType[payload], 'pay0', payload);
    if (ok) {
      yield put({
        type: types.updateCat,
        catType: dataType[payload],
        payload: data,
      });
    }
  } catch (error) {
    errorMessage(error.message.split(' ').slice(1).join(' ') ?? error);
    console.log('err', error);
  } finally {
    yield put(loadingFalse());
  }
};

// const getVideoData = function* ({payload}) {
//   yield put(loadingTrue());
//   try {
//     const {ok, data} = yield call(getCategoryApi, payload);
//     if (ok) {
//       yield put({
//         type: types.updateCat,
//         catType: 'Video',
//         payload: data,
//       });
//     }
//   } catch (error) {
//     errorMessage(error.message.split(' ').slice(1).join(' ') ?? error);
//     console.log('err', error);
//   } finally {
//     yield put(loadingFalse());
//   }
// };

const getmsdsData = function* ({payload}) {
  yield put(loadingTrue());
  try {
    const {ok, data} = yield call(getmsdsApi);
    if (ok) {
      yield put({
        type: types.updateCat,
        catType: 'msdSheets',
        payload: data?.all_msds,
      });
    }
  } catch (error) {
    errorMessage(error.message.split(' ').slice(1).join(' ') ?? error);
    console.log('err', error);
  } finally {
    yield put(loadingFalse());
  }
};

const getcatalogData = function* ({payload}) {
  yield put(loadingTrue());
  try {
    const {ok, data} = yield call(getCatalogApi);
    if (ok) {
      yield put({
        type: types.updateCat,
        catType: 'catalog',
        payload: data?.all_catalogs,
      });
    }
  } catch (error) {
    errorMessage(error.message.split(' ').slice(1).join(' ') ?? error);
    console.log('err', error);
  } finally {
    yield put(loadingFalse());
  }
};

function* contentSaga() {
  yield takeLatest(types.trainingCat, getTrainingData);
  yield takeLatest(types.msdsSheet, getmsdsData);
  yield takeLatest(types.getcatalogData, getcatalogData);
}

export default contentSaga;
