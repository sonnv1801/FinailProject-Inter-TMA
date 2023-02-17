import { createAction } from '.';
import { userService } from '../../services';
import { GET_USER, START_LOADING, STOP_LOADING } from '../type/types';

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

export const getUsers = () => {
  return (dispatch) => {
    dispatch(startLoading());
    userService
      .getUser()
      .then((res) => {
        dispatch(createAction(GET_USER, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};
