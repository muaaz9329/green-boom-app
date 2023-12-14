import {create} from 'apisauce';
import {baseURL, fcmToken, getAllUser, notifyUserUrl} from './Urls';
import {store} from '../Redux/Reducer';
import {loadingFalse, loadingTrue} from '../Redux/Action/isloadingAction';
import {Platform} from 'react-native';
import {logOutUser} from '../Redux/Action/AuthAction';
import {types} from '../Redux/types';
import moment from 'moment';

const API = create({
  baseURL,
  timeout: 15000,
  //   timeoutErrorMessage: 'Please try Again...',
});

const hideLoaderAPIs = [notifyUserUrl, getAllUser, fcmToken];
// const hideLoaderAPIs = ['/playcount', '/playlist', '/home-content'];

API.addRequestTransform(config => {
  if (!hideLoaderAPIs.includes(config.url)) store.dispatch(loadingTrue());
  const {Auth} = store.getState();
  config.headers = {
    Authorization: `Bearer ${Auth.token}`,
  };
  return config;
});

API.addResponseTransform(response => {
  setTimeout(() => store.dispatch(loadingFalse()), 500);
  const {Auth} = store.getState();
  console.log('token111', Auth.token);
  if (
    response?.originalError?.message == 'Request failed with status code 401' &&
    Auth.token != ''
  )
    store.dispatch({type: types.LogoutType});

  return response;
});

const {get} = API;

//^ altering the get()
API.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  // if (response.ok) {
  return response;
  // }
};

const formDataFunc = (url, body, imageKey, isArray) => {
  const {Auth} = store.getState();
  console.log(
    'bjdv dv hj hj dhjs dshj bdh∫√ dhjksbvsdhj',
    url,
    body,
    imageKey,
    isArray,
  );
  var myHeaders = new Headers();
  myHeaders.append('Accept', 'application/json');
  myHeaders.append('Authorization', `Bearer ${Auth.token}`);
  myHeaders.append('Content-Type', 'multipart/form-data');

  const formData = new FormData();
  Object.entries(body).forEach(([key, value]) => {
    if (body?.profileData?.type) {
      formData.append(imageKey, {
        uri: body?.profileData.uri,
        type: body?.profileData.type,
        name: body?.profileData.fileName,
      });
    }
    formData.append(key, value);
  });
  console.log('asdasd123', formData);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formData,
    redirect: 'follow',
  };
  let newUrl = baseURL + url;
  console.log(newUrl, 'aasdas');
  return fetch(newUrl, requestOptions)
    .then(res => res.json())
    .then(res => {
      console.log('test', res);
      return {data: res, ok: true};
    })
    .catch(err => {
      console.log('testerr', err);
      return {data: err, ok: false};
    });
};

const timeLayout = time => {
  return moment(time).format('hh:mm A');
};

const AMPMLayout = time => {
  return Boolean(moment(time).format('A') == 'AM');
};

const contentTime = (time, format = false) => {
  if (!format) {
    const hour = moment.utc(time * 1000).format('HH');
    const minute = moment.utc(time * 1000).format('mm');
    const second = moment.utc(time * 1000).format('ss');
    return hour == '00' ? `${minute}:${second}` : `${minute}:${second}`;
  }
  const hour = moment.utc(time * 1000).format('HH');
  const minute = moment.utc(time * 1000).format('mm');
  const second = moment.utc(time * 1000).format('ss');
  const hoursFormatted = hour !== '00' ? `${hour} hour ` : '';
  const minutesFormatted = minute !== '00' ? `${minute} minutes` : '';
  const secondFormatted = second !== '00' ? `${second} seconds` : '';
  return [hoursFormatted, minutesFormatted, secondFormatted].join('');
};

export const secondsToTime = timeInSeconds => {
  const hours = Math.floor(timeInSeconds / 3600)
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((timeInSeconds % 3600) / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, '0');
  return {seconds, minutes, hours};
};

const randomNanoIdGenerator = () => nanoid();
const keyExtractor = item => item?.id;

const durationAsString = date => {
  const start = new Date();
  const currentTime = new Date(date);
  currentTime.setDate(start.getDate());
  if (start.getTime() > currentTime.getTime())
    currentTime.setDate(start.getDate() + 1);

  const duration = moment.duration(moment(currentTime).diff(moment(start)));

  //Get Days
  const days = Math.floor(duration.asDays()); // .asDays returns float but we are interested in full days only
  const daysFormatted = days ? `${days}day ` : ''; // if no full days then do not display it at all

  //Get Hours
  const hours = duration.hours();
  const hoursFormatted = hours ? `${hours}hr ` : '';

  //Get Minutes
  const minutes = duration.minutes();
  const minutesFormatted = minutes ? `${minutes}min` : '';

  return [daysFormatted, hoursFormatted, minutesFormatted].join('');
};

export {formDataFunc, contentTime};

export default API;
