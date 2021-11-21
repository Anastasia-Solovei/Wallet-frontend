import axios from 'axios';
import { dataFromBackend } from '../../assets/constants';

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
// axios.defaults.baseURL = 'http://localhost:3002';

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransRequest());
  try {
    const { data } = await axios.get('/transactions');
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
    const data = await dataFromBackend;
    console.log(data);
    // const { data } = await axios.get(
    //   `/transactions/statistics?month=${month}&year=${year}`,
    // );
    dispatch(getTransByDateSuccess(data));
  } catch (error) {
    dispatch(getTransByDateError(error.message));
  }
};
