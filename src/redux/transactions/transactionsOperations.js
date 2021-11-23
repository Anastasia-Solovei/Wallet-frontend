import axios from 'axios';

import { dataFromBackend } from '../../assets/constants';
import { toast } from 'react-toastify';

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
  getTransByDateRequest,
  getTransByDateSuccess,
  getTransByDateError,
} from './transactionsActions';

axios.defaults.baseURL = 'https://project-wallet.herokuapp.com';

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransRequest());
  try {
    const { data } = await axios.get('/transactions/all');
    dispatch(fetchTransSuccess(data));
  } catch (error) {
    dispatch(fetchTransError(error.message));
  }
};

export const addTransactions = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/transactions/new', transaction);
    dispatch(addTransSuccess(data));
  } catch (error) {
    toast.error('Something is wrong. Try again later', {
      theme: 'colored',
    });
    dispatch(addTransError(error.message));
  }
};

export const deleteTransaction = transactionId => async dispatch => {
  dispatch(deleteTransRequest());
  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransSuccess(transactionId));
  } catch (error) {
    dispatch(deleteTransError(error.message));
  }
};

export const getTransactionsByDate = (month, year) => async dispatch => {
  dispatch(getTransByDateRequest());
  try {
    const { data } = await axios.get(
      `/transactions/statistics?month=${month}&year=${year}`,
    );

    dispatch(getTransByDateSuccess(data.statistics));
  } catch (error) {
    dispatch(getTransByDateError(error.message));
  }
};
