import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from './authActions';

import axios from 'axios';

axios.defaults.baseURL = '';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = credentials => async dispatch => {
  dispatch(registrationRequest());
  dispatch(registrationError(null));

  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    dispatch(registrationSuccess(data));
  } catch (error) {
    if (error.response.status === 409) {
      error.message = 'Email alreagy exists';
    }
    dispatch(registrationError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());
  dispatch(loginError(null));
  try {
    const { data } = await axios.post('/users/singin', credentials);
    token.set(data.token);
    dispatch(loginSuccess(data));
  } catch (error) {
    if (error.response.status === 400 || 401) {
      error.message = 'Incorrect email or password';
    }
    dispatch(loginError(error.message));
  }
};

const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await axios.post('/users/logout');
    token.unset();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const { date } = await axios.get('/users/current');
    dispatch(getCurrentUserSuccess(date));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export { register, logIn, logOut, getCurrentUser };
