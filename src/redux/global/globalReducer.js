import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogOut,
  closeModalLogOut,
} from './globalActions';

const isTransactionModalOpen = createReducer(false, {
  [openModalAddTransaction]: () => true,
  [closeModalAddTransaction]: () => false,
});

const isExitModalOpen = createReducer(false, {
  [openModalLogOut]: () => true,
  [closeModalLogOut]: () => false,
});

export default combineReducers({
  isTransactionModalOpen,
  isExitModalOpen,
});
