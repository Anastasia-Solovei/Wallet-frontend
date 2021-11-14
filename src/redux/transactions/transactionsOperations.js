import axios from 'axios';
import {
  fetchTransactionsRequest,
  fetchTransactionsSuccess,
  fetchTransactionsError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
  deleteTransactionRequest,
  deleteTransactionSuccess,
  deleteTransactionError,
} from './transactionsActions';

axios.defaults.baseURL = '/';

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const { data } = await axios.get('/transactions');
    dispatch(fetchTransactionsSuccess(data));
  } catch (error) {
    dispatch(fetchTransactionsError(error.message));
  }
};

export const addTransactions = transaction => async dispatch => {
  dispatch(addTransactionRequest());
  try {
    const { data } = await axios.post('/transactions', transaction);
    dispatch(addTransactionSuccess(data));
  } catch (error) {
    dispatch(addTransactionError(error.message));
  }
};

export const deleteTransaction = transactionId => async dispatch => {
  dispatch(deleteTransactionRequest());
  try {
    await axios.delete(`/transactions/${transactionId}`);
    dispatch(deleteTransactionSuccess(transactionId));
  } catch (error) {
    dispatch(deleteTransactionError(error.message));
  }
};
