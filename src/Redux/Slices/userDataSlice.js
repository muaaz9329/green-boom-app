import {createSlice} from '@reduxjs/toolkit';
// import { colors } from "../../services";

const initialState = {
  userData: {},
  role: 'client',
  accessToken: '',
  refreshToken: '',
  profileComplete: false,
  isSurvey: false,
  deviceToken: '',
  isLoggedIn: false,
  themeColor: '',
  isSocial: false,
};

export const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
      state.role = action.payload.role;
    },
    setUserProfileComplete: (state, action) => {
      state.profileComplete = action.payload;
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    refreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    userSurveySave: (state, action) => {
      state.isSurvey = action.payload;
    },
    deviceTokenSave: (state, action) => {
      state.deviceToken = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },

    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setOtpToResetPass: (state, action) => {
      state.otpToResetPass = action.payload;
    },
    setRememberMe: (state, action) => {
      state.canRememberYou = action.payload;
    },
    setIsSocial: (state, action) => {
      state.isSocial = action.payload;
    },
    setLogout: (state, action) => {
      state.userData = {};
      state.role = 'user';
      state.accessToken = '';
      state.refreshToken = '';
      state.profileComplete = false;
      state.isSurvey = false;
      state.deviceToken = '';
      state.isVerified = false;
      state.isLoggedIn = false;
      state.otpToResetPass = null;
      state.canRememberYou = true;
      state.isSocial = false;
    },
  },
});

export const userDataSelector = (
  state = {
    userData: {
      userData: {},
      role: 'client',
      accessToken: '',
      refreshToken: '',
      profileComplete: false,
      isSurvey: false,
      deviceToken: '',
      isVerified: false,
      isLoggedIn: false,
    },
  },
) => state.userData;

export const {
  deviceTokenSave,
  refreshToken,
  setAccessToken,
  setIsLoggedIn,
  setLogout,
  setOtpToResetPass,
  setRememberMe,
  setUserData,
  setUserProfileComplete,
  userSurveySave,
  setRole,
  setIsSocial,
} = userDataSlice.actions;

export default userDataSlice.reducer;
