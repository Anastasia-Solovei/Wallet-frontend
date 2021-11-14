import { createAction } from '@reduxjs/toolkit';

export const usersSignUpAction = createAction('session/register');
export const usersLogInAction = createAction('session/login');
export const usersLogOutAction = createAction('session/logout');
export const usersFetchCurrentUser = createAction('session/refresh');
