import { userService } from '../../services';
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../type/types';
import { createAction } from '.';

export const loginStart = () => {
  return {
    type: LOGIN_START,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  userService
    .Login(user)
    .then((res) => {
      dispatch(createAction(LOGIN_SUCCESS, res.data));
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailed());
    });
};
