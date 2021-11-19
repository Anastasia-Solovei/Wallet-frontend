import { createAction } from '@reduxjs/toolkit';

export const openModalAddTransaction = createAction('openModalAddTransaction');
export const closeModalAddTransaction = createAction(
  'closeModalAddTransaction',
);

export const openModalLogOut = createAction('global/openModalLogOut ');
export const closeModalLogOut = createAction('global/closeModalLogOut');
