import { createSlice } from '@reduxjs/toolkit';
import sessionOperations from './sessionOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: true,
  error: null,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.register.pending](state) {
    },
    [sessionOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [sessionOperations.register.rejected](state, action) {
    },
    [sessionOperations.logIn.pending](state) {
    },
    [sessionOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    [sessionOperations.logIn.rejected](state) {
    },
    [sessionOperations.logOut.pending](state) {
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isAuth = false;
      state.error = null;

    },
    [sessionOperations.logOut.rejected](state, action) {
      state.error = action.payload.message;
    },
    [sessionOperations.fetchCurrentUser.pending](state) {
    },
    [sessionOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isAuth = true;
    },
  },
});

export default sessionSlice.reducer;
