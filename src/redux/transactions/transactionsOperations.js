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
} from './transactionsActions';

axios.defaults.baseURL = '/';

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
