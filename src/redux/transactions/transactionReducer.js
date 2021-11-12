import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as authActions from '../auth/authActions';
import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  changeFilter,
  clearError,
} from './transactionActions';

const onAddTransaction = (state, action) => {
  return [...state, action.payload];
};

const onGetTransactions = (_, action) => action.payload;

const onError = (_, { payload }) => payload;

const transactions = createReducer([], {
  [addTransactionSuccess]: onAddTransaction,
  [fetchTransactionSuccess]: onGetTransactions,
  [authActions.logoutSuccess]: () => [],
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addTransactionRequest]: () => true,
  [addTransactionSuccess]: () => false,
  [addTransactionError]: () => false,
  [fetchTransactionRequest]: () => true,
  [fetchTransactionSuccess]: () => false,
  [fetchTransactionError]: () => false,
});

const error = createReducer(null, {
  [fetchTransactionError]: onError,
  [addTransactionError]: onError,
  [clearError]: () => null,
});

export default combineReducers({
  transactions,
  filter,
  loading,
  error,
});
