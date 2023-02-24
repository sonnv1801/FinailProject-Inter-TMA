import { typeProduct } from '../../services';
import { createAction } from '.';
import { FETCH_TYPE_PRODUCT, START_LOADING, STOP_LOADING } from '../type/types';

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

export const getAllTypeProduct = () => {
  return (dispatch) => {
    dispatch(startLoading());
    typeProduct
      .getAllTypeProduct()
      .then((res) => {
        dispatch(createAction(FETCH_TYPE_PRODUCT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
