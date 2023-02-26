import { createAction } from '.';
import { productSevice } from '../../services';
import {
  FETCH_PRODUCT,
  FETCH_PRODUCT_10DAYS,
  START_LOADING,
  STOP_LOADING,
} from '../type/types';

export const startLoading = () => {
  return {
    type: START_LOADING,
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  };
};

export const getProduct = () => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getAllProduct()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProduct10days = () => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProduct10days()
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_10DAYS, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
