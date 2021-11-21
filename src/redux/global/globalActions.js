import { createAction } from '@reduxjs/toolkit';

export const openModalAddTransaction = createAction(
  'global/openModalAddTransaction',
);
export const closeModalAddTransaction = createAction(
  'closeModalAddTransaction',
);

export const openModalLogOut = createAction('global/openModalLogOut ');
export const closeModalLogOut = createAction('global/closeModalLogOut');
