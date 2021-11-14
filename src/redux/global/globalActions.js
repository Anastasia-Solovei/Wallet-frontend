import { createAction } from '@reduxjs/toolkit';

export const openModalAddTransaction = createAction('openModalAddTransaction');
export const closeModalAddTransaction = createAction(
  'closeModalAddTransaction',
);

export const openModalLogOut = createAction('openModalLogOut ');
export const closeModalLogOut = createAction('closeModalLogOut');
