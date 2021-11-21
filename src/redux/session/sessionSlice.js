import { createSlice } from '@reduxjs/toolkit';
import * as sessionOperations from './sessionOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
  error: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.register.fulfilled](state, action) {
      state.token = action.payload.emailVerificationToken;
      state.user = action.payload.user;
      state.isAuth = true;
    },
    [sessionOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.isAuth = false;
      state.token = null;
    },
    [sessionOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },

    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuth = false;
      state.error = null;
    },
    [sessionOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export default sessionSlice.reducer;
