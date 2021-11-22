import { createAction } from '@reduxjs/toolkit';

export const usersLogInAction = createAction('session/login');
export const usersSignUpAction = createAction('session/register');
export const usersLogOutAction = createAction('session/logout');
export const usersFetchCurrentUserAction = createAction('session/refresh');
