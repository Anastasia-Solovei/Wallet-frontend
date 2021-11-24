import axios from 'axios';

import {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesError,
} from './categoriesActions';

axios.defaults.baseURL = 'https://project-wallet-main.herokuapp.com';

export const getCategories = () => async dispatch => {
  dispatch(getCategoriesRequest());
  try {
    const { data } = await axios.get('/categories/all');
    dispatch(getCategoriesSuccess(data));
  } catch (error) {
    dispatch(getCategoriesError(error.message));
  }
};
