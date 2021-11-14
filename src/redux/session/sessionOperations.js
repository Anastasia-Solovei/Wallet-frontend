import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  usersSignUpAction,
  usersLogInAction,
  usersLogOutAction,
  usersFetchCurrentUserAction,
} from './sessionActions';
import axios from 'axios';
axios.defaults.baseURL = '/';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  usersSignUpAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logIn = createAsyncThunk(
  usersLogInAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/login`, credentials);
      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const logOut = createAsyncThunk(
  usersLogOutAction,
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`/users/logout`);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  usersFetchCurrentUserAction,
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.session.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('there is no token');
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get(`/users/current`);
      return data;
    } catch (error) {}
  },
);

export default { register, logIn, logOut, fetchCurrentUser };
