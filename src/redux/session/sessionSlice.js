import { createSlice } from '@reduxjs/toolkit';
import sessionOperations from './sessionOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = true;
    },
    [sessionOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = true;
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = true;
    },
    [sessionOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = true;
    },
  },
});

export default sessionSlice.reducer;
