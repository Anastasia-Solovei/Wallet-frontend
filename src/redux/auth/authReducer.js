import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  loginRequest,
  loginSuccess,
  loginError,
  getCurrentUserSuccess,
  getCurrentUserError,
  clearError,
} from './authActions';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initialUserState,
});

const token = createReducer(null, {
  [registrationSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registrationError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,
  [clearError]: () => null,
});

const loading = createReducer(false, {
  [registrationRequest]: () => true,
  [registrationSuccess]: () => false,
  [registrationError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,
});

const isAuth = createReducer(false, {
  [loginSuccess]: () => true,
  [logoutError]: () => false,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserError]: () => false,
});

export default combineReducers({
  user,
  token,
  isAuth,
  error,
  loading,
});
