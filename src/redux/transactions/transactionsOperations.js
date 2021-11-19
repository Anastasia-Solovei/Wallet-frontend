import axios from 'axios';
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
    const { data } = await axios.get('/transactions');
    dispatch(fetchTransSuccess(data));
  } catch (error) {
    dispatch(fetchTransError(error.message));
  }
};

export const addTransactions = transaction => async dispatch => {
  dispatch(addTransRequest());
  try {
    const { data } = await axios.post('/transactions', transaction);
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
    const { data } = await axios.get(
      `/transactions/statistics?month=${month}&year=${year}`,
    );
    dispatch(getTransByDateSuccess(data));
  } catch (error) {
    dispatch(getTransByDateError(error.message));
  }
};
