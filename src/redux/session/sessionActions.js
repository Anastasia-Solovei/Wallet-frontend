import { createAction } from '@reduxjs/toolkit';

export const usersSignUpAction = createAction('session/register');
export const usersLogInAction = createAction('session/login');
export const usersLogOutAction = createAction('session/logout');
export const usersFetchCurrentUserAction = createAction('session/refresh');

export const userslogOutSuccess = createAction('auth/logoutSuccess');
export const userslogOutError = createAction('auth/logoutError');