import { createAction } from '@reduxjs/toolkit';
import types from './transactionsActionTypes';

export const fetchTransRequest = createAction(types.TRANSACTIONS_FETCH_REQUEST);
export const fetchTransSuccess = createAction(types.TRANSACTIONS_FETCH_SUCCESS);
export const fetchTransError = createAction(types.TRANSACTIONS_FETCH_ERROR);

export const addTransRequest = createAction(types.TRANSACTIONS_ADD_REQUEST);
export const addTransSuccess = createAction(types.TRANSACTIONS_ADD_SUCCESS);
export const addTransError = createAction(types.TRANSACTIONS_ADD_ERROR);

export const deleteTransRequest = createAction(
  types.TRANSACTIONS_DELETE_REQUEST,
);
export const deleteTransSuccess = createAction(
  types.TRANSACTIONS_DELETE_SUCCESS,
);
export const deleteTransError = createAction(types.TRANSACTIONS_DELETE_ERROR);

export const filterTransRequest = createAction(
  'transaction/filterTransRequest',
);
export const filterTransSuccess = createAction(
  'transaction/filterTransSuccess',
);
export const filterTransError = createAction('transaction/filterTransError');

export const getTransByDateRequest = createAction(
  'transaction/getTransactionsByDateRequest',
);

export const getTransByDateSuccess = createAction(
  'transaction/getTransactionsByDateSuccess',
);

export const getTransByDateError = createAction(
  'transaction/getTransactionsByDateError',
);
