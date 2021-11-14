import {
  openModalAddTransaction,
  closeModalAddTransaction,
  openModalLogOut,
  closeModalLogOut,
} from './globalActions';

export const setTransactionModalOpen = () => dispatch => {
  dispatch(openModalAddTransaction());
};
export const setTransactionModalClose = () => dispatch => {
  dispatch(closeModalAddTransaction());
};

export const setExitModalOpen = () => dispatch => {
  dispatch(openModalLogOut());
};
export const setExitModalClose = () => dispatch => {
  dispatch(closeModalLogOut());
};
