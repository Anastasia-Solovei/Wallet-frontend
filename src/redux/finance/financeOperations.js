import axios from 'axios';

import {
  fetchBalanceRequest,
  fetchBalanceSuccess,
  fetchBalanceError,
} from './financeActions';

axios.defaults.baseURL = 'https://project-wallet-main.herokuapp.com';

export const getCurrentBalance = () => async (dispatch, getStore) => {
  dispatch(fetchBalanceRequest());
  const {
    auth: { token },
  } = getStore();
  try {
    const { data } = await axios({
      method: 'get',
      url: '/users/current',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(fetchBalanceSuccess(data.data.balance));
  } catch (error) {
    dispatch(fetchBalanceError(error.message));
  }
};
