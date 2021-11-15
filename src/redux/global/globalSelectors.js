// import { createSelector } from '@reduxjs/toolkit';

const getIsTransactionModalOpen = state =>
  state.transactions.isTransactionModalOpen;

const getIsExitModalOpen = state => state.transactions.isExitModalOpen;

const getIsLoading = state => state.global.isLoading;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getIsTransactionModalOpen,
  getIsExitModalOpen,
  getIsLoading,
};
