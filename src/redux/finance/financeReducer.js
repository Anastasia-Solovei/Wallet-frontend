import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { fetchBalanceSuccess, fetchBalanceError } from './financeActions';

const INITIAL_BALANCE = 0;

const totalBalance = createReducer(INITIAL_BALANCE, {
  [fetchBalanceSuccess]: (_, { payload }) => payload,
  [fetchBalanceError]: () => INITIAL_BALANCE,
});

export default combineReducers({ totalBalance });
