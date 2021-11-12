import axios from 'axios';
import {
  fetchTransactionRequest,
  fetchTransactionSuccess,
  fetchTransactionError,
  addTransactionRequest,
  addTransactionSuccess,
  addTransactionError,
} from './transactionActions';

axios.defaults.baseURL = '';

export const addTransaction =
  ({ date, type, category, comments, amount, token }) =>
  async dispatch => {
    try {
      dispatch(addTransactionRequest());
      const { data } = await axios.post(
        '/transaction/addOperation',
        { date, type, category, comments, amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      dispatch(addTransactionSuccess(data));
    } catch (error) {
      dispatch(addTransactionError(error));
    }
  };

export const getAllTransactions = token => async dispatch => {
  try {
    dispatch(fetchTransactionRequest());

    const { data } = await axios.get('/transaction/getdata', {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(fetchTransactionSuccess(data));
  } catch (error) {
    dispatch(fetchTransactionError(error));
  }
};
