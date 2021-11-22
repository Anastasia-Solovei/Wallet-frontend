import { createReducer, combineReducers } from '@reduxjs/toolkit';

import {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogOut,
  closeModalLogOut,
} from './globalActions';

import * as sessionOperations from '../session/sessionOperations';
import { fabClasses } from '@mui/material';

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
  [sessionOperations.register.pending]: () => true,
  [sessionOperations.register.fulfilled]: () => false,
  [sessionOperations.register.rejected]: () => false,

  [sessionOperations.logIn.pending]: () => true,
  [sessionOperations.logIn.fulfilled]: () => false,
  [sessionOperations.logIn.rejected]: () => false,

  [sessionOperations.logOut.pending]: () => true,
  [sessionOperations.logOut.fulfilled]: () => false,
  [sessionOperations.logOut.rejected]: () => false,

  [sessionOperations.fetchCurrentUser.pending]: () => true,
  [sessionOperations.fetchCurrentUser.fulfilled]: () => false,
  [sessionOperations.fetchCurrentUser.rejected]: () => false,
});

export default combineReducers({
  isTransactionModalOpen,
  isExitModalOpen,
  isLoading,
});
