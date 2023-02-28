import Swal from 'sweetalert2';
import { createAction } from '.';
import { productSevice } from '../../services';
import {
  ADD_CART,
  BUY_PRODUCT,
  DELETE_CART,
  FETCH_DETAIL,
  FETCH_PRODUCT,
  FETCH_PRODUCT_10DAYS,
  FETCH_PRODUCT_SIMILAR,
  FETCH_PRODUCT_TYPE,
  FETCH_PRODUCT_TYPE_SAMSUNG,
  NUMBER_QUANTITY,
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

export const getDetail = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getDetail(id)
      .then((res) => {
        dispatch(createAction(FETCH_DETAIL, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductSimilar = (id) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductSimilar(id)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_SIMILAR, res.data));
        dispatch(getProduct());
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductType = (type, limit) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductType(type, limit)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_TYPE, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const getProductTypeSamsung = (limit) => {
  return (dispatch) => {
    dispatch(startLoading());
    productSevice
      .getProductTypeSamsung(limit)
      .then((res) => {
        dispatch(createAction(FETCH_PRODUCT_TYPE_SAMSUNG, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const addCart = (product) => {
  const productCart = {
    id: product._id,
    title: product.title,
    image: product.image,
    newPrice: product.newPrice,
    quantity_cart: 1,
  };
  return (dispatch) => {
    dispatch(createAction(ADD_CART, productCart))
      .then(() => {
        Swal.fire('Add Successfully!', 'success');
      })
      .catch(() => {
        Swal.fire('Add not Successfully!', 'warning');
      });
  };
};

export const deleteCart = (product) => {
  return (dispatch) => {
    dispatch(createAction(DELETE_CART, product));
  };
};

export const numberQuantity = (product, status) => {
  return (dispatch) => {
    dispatch(createAction(NUMBER_QUANTITY, { product, status }));
  };
};

export const buyProduct = (navigate) => {
  return (dispatch) => {
    dispatch(createAction(BUY_PRODUCT));
  };
};
