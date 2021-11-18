// import { createSelector } from '@reduxjs/toolkit';

export const getIsTransactionModalOpen = state =>
  state.transactions.isTransactionModalOpen;

export const getIsExitModalOpen = state => state.transactions.isExitModalOpen;

export const getIsLoading = state => state.global.isLoading;

// eslint-disable-next-line import/no-anonymous-default-export
// export default {
//   getIsTransactionModalOpen,
//   getIsExitModalOpen,
//   getIsLoading,
// };
