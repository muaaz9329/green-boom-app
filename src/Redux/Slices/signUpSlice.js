import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../../services";

export const InitialSignUpStep = {
  startUp: "startUp",

  ProfileCreation: "ProfileCreation",
};

const initialState = {
  stepNo: InitialSignUpStep.startUp,
};

export const signupStep = createSlice({
  name: "signupStep",
  initialState,
  reducers: {
    setInitialSignupStep: (state, action) => {
      state.stepNo = action.payload;
    },
  },
});

export const { setInitialSignupStep } = signupStep.actions;

export default signupStep.reducer;
