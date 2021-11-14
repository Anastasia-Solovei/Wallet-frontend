import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  fetchTransRequest,
  fetchTransSuccess,
  fetchTransError,
  addTransRequest,
  addTransSuccess,
  addTransError,
  deleteTransRequest,
  deleteTransSuccess,
  deleteTransError,
  filterTransRequest,
  filterTransSuccess,
  filterTransError,
} from './transactionsActions';

const result = createReducer([], {
  [fetchTransSuccess]: (_, { payload }) => payload,
  [addTransSuccess]: (state, { payload }) => [...state, payload],
  [deleteTransSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filterTransSuccess]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchTransRequest]: () => true,
  [fetchTransSuccess]: () => false,
  [fetchTransError]: () => false,
  [addTransRequest]: () => true,
  [addTransSuccess]: () => false,
  [addTransError]: () => false,
  [deleteTransRequest]: () => true,
  [deleteTransSuccess]: () => false,
  [deleteTransError]: () => false,
  [filterTransRequest]: () => true,
  [filterTransSuccess]: () => false,
  [filterTransError]: () => false,
});

const error = createReducer(null, {
  [fetchTransError]: (_, { payload }) => payload,
  [addTransError]: (_, { payload }) => payload,
  [deleteTransError]: (_, { payload }) => payload,
  [filterTransError]: (_, { payload }) => payload,
  [fetchTransRequest]: () => null,
  [addTransRequest]: () => null,
  [deleteTransRequest]: () => null,
  [filterTransRequest]: () => null,
});

export default combineReducers({
  result,
  filter,
  loading,
  error,
});