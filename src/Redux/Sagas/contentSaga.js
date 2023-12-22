const {put, call, takeLatest} = require('redux-saga/effects');
const {loadingTrue, loadingFalse} = require('../Action/isloadingAction');
const {errorMessage} = require('../../Config/NotificationMessage');
const {getCategoryApi} = require('../../Services/contentServices');
const {types} = require('../types');

const getTrainingData = function* ({payload}) {
  yield put(loadingTrue());
  try {
    const {ok, data} = yield call(getCategoryApi, payload);
    if (ok) {
      yield put({
        type: types.updateCat,
        catType: 'Training',
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

const getVideoData = function* ({payload}) {
  yield put(loadingTrue());
  try {
    const {ok, data} = yield call(getCategoryApi, payload);
    if (ok) {
      yield put({
        type: types.updateCat,
        catType: 'Video',
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

function* contentSaga() {
  yield takeLatest(types.trainingCat, getTrainingData);
}

export default contentSaga;
