const getCredentials = () => {
  if (__DEV__)
    return {
      baseURL: 'http://3.22.27.67/api/v1',
      imageURL: 'https://virtualrealitycreators.com/green-boom/',
    };
  else {
    console.log = () => { };
    return {
      baseURL: 'http://3.22.27.67/api/v1',
      imageURL: 'https://virtualrealitycreators.com/green-boom/',
    };
  }
};

export const { baseURL, imageURL } = getCredentials();

export const apendUrl = url => {
  return baseURL + url;
};

export const BASE_URL = baseURL;

export default {
  // -----AUTH------//
  signUp: BASE_URL + '/user/signup',
  signIn: BASE_URL + '/user/login',
  socialLogin: BASE_URL + '/user/socialLogin',
  updateMe: BASE_URL + '/user/updateProfile',
  updatePassword: BASE_URL + '/user/updateMyPassword',

  //------Home tab ----//
  getHomeData: BASE_URL + '/appItems',
  video: BASE_URL + '/video',
  kit: BASE_URL + '/orderKit',
  msds: BASE_URL + '/mSDS',
  product: BASE_URL + '/product',

  // -----Service------//-----Service Provider
  createService: BASE_URL + '/service',
  getServices: BASE_URL + '/service',
  getProposals: BASE_URL + '/proposal',
  getCategories: BASE_URL + '/category',

  //-----Service-------// Client

  getServices: BASE_URL + '/service',
  getServiceDetail: `${BASE_URL}/service`,
  createProposal: BASE_URL + '/proposal',
  getMyBookings: BASE_URL + '/proposal',
  acceptOrRejectProposal: BASE_URL + '/proposal',

  //Profile
  getPrivacy: BASE_URL + '/privacy',
  getSinglePrivacy: BASE_URL + '/privacy',
  getNotifications: BASE_URL + '/user/mynotifications',
  getInfo: BASE_URL + '/user/getInfo',

  // reviews

  reviews: BASE_URL + '/review',
};
