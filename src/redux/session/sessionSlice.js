import { createSlice } from '@reduxjs/toolkit';
import sessionOperations from './sessionOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: true,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.register.pending](state) {
      state.global.isLoading = true;
    },
    [sessionOperations.register.fulfilled](state, action) {
      console.log(state);
      state.user = action.payload.user;
      state.session.token = action.payload.token;
      state.session.isAuth = true;
      state.global.isLoading = false;
    },
    [sessionOperations.register.rejected](state) {
      state.global.isLoading = false;
    },
    [sessionOperations.logIn.pending](state) {
      state.global.isLoading = true;
    },
    [sessionOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.session.token = action.payload.token;
      state.session.isAuth = true;
      state.global.isLoading = false;
    },
    [sessionOperations.logIn.rejected](state) {
      state.global.isLoading = false;
    },
    [sessionOperations.logOut.pending](state) {
      state.global.isLoading = true;
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.session.token = null;
      state.session.isAuth = false;
      state.global.isLoading = false;
      state.finance.totalBalance = 0;
    },
    [sessionOperations.logOut.rejected](state) {
      state.global.isLoading = false;
    },
    [sessionOperations.fetchCurrentUser.pending](state) {
      state.global.isLoading = true;
    },
    [sessionOperations.fetchCurrentUser.fulfilled](state, action) {
      console.log(state);
      state.session.user = action.payload;
      state.session.isAuth = true;
      state.global.isLoading = false;
    },
    // [sessionOperations.fetchCurrentUser.rejected](state, action) {
    //   console.log(state);                             // видає помилку не розібралась чому
    //   state.global.isLoading = false;
    // },
  },
});

export default sessionSlice.reducer;
