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

const isTransactionModalOpen = createReducer(false, {
  [openModalAddTransaction]: () => true,
  [closeModalAddTransaction]: () => false,
});

const isExitModalOpen = createReducer(false, {
  [openModalLogOut]: () => true,
  [closeModalLogOut]: () => false,
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
