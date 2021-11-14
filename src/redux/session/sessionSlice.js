import { createSlice } from '@reduxjs/toolkit';
import sessionOperations from './sessionOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  IsLoggedIn: false,
  isLoading: false,
};

const sessionSlice = createSlice({
  name: 'session',
  initialState,
  extraReducers: {
    [sessionOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.IsLoggedIn = true;
      state.isLoading = true;
    },
    [sessionOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.IsLoggedIn = true;
      state.isLoading = true;
    },
    [sessionOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.IsLoggedIn = false;
      state.isLoading = true;
    },
    [sessionOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.IsLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.isLoading = true;
    },
  },
});

export default sessionSlice.reducer;
