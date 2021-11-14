import { createSelector } from '@reduxjs/toolkit';

const isTransactionModalOpen = state =>
  state.transactions.isTransactionModalOpen;
const isExitModalOpen = state => state.transactions.isExitModalOpen;

export default {
  isTransactionModalOpen,
  isExitModalOpen,
};
