import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogOut,
  closeModalLogOut,
} from './globalActions';

import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from '../finance/financeActions';

import * as sessionOperations from '../session/sessionOperations'

const isTransactionModalOpen = createReducer(false, {
  [openModalAddTransaction]: () => true,
  [closeModalAddTransaction]: () => false,
});

const isExitModalOpen = createReducer(false, {
  [openModalLogOut]: () => true,
  [closeModalLogOut]: () => false,
  [sessionOperations.logOut.rejected]: () => false,
});

const isLoading = createReducer(false, {
  [fetchBalanceRequest]: () => true,
  [fetchBalanceSuccess]: () => false,
  [fetchBalanceError]: () => false,
});

export default combineReducers({
  isTransactionModalOpen,
  isExitModalOpen,
  isLoading,
});
