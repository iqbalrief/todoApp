import { createSlice } from '@reduxjs/toolkit';

import { 
  signupUser,
  signinUser} from '../action/authAction';

  const userToken = localStorage.getItem('userToken') || '';

  const initialState = {
    isLoading: false,
    userInfo: null,
    userToken,
    error: null,
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthData: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.currentUser = action.payload.currentUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer