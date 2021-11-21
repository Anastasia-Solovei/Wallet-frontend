import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  usersSignUpAction,
  usersLogInAction,
  usersLogOutAction,
  usersFetchCurrentUserAction,
  userslogOutSuccess,
  userslogOutError,
} from './sessionActions';

import { closeModalLogOut } from '../global/globalActions';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'https://project-wallet.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  usersSignUpAction,
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/users/signup`, credentials);
      token.set(data.emailVerificationToken);

      toast(
        'Registration was successful. Go to your email to confirm registration!',
        { theme: 'colored', type: 'success' },
      );
      return data;
    } catch (error) {
      console.log('error', error.message);

      if (error.message === 'Request failed with status code 409') {
        toast.error('Email is already in use. Login please!', {
          theme: 'colored',
        });
      } else {
        toast.error('Something is wrong. Try again later', {
          theme: 'colored',
        });
      }
      return rejectWithValue(error.message);
    }
  },
);

export const logIn = createAsyncThunk(
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

export const logOut = createAsyncThunk(
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

export const fetchCurrentUser = createAsyncThunk(
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

