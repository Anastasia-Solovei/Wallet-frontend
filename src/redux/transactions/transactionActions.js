import { createAction } from '@reduxjs/toolkit';
export const fetchTransactionRequest = createAction(
  'transactions / getRequest',
);
export const fetchTransactionSuccess = createAction(
  'transactions / getSuccess',
);
export const fetchTransactionError = createAction('transactions / getError');

export const addTransactionRequest = createAction('transaction / addRequest');
export const addTransactionSuccess = createAction('transaction / addSuccess');
export const addTransactionError = createAction('transaction / addError');

export const changeFilter = createAction('transaction/changeFilter');
export const clearError = createAction('transaction/clearError');
