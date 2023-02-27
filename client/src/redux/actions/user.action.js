import { userService } from '../../services';
import Swal from 'sweetalert2';
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  UPDATE_USER,
} from '../type/types';
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
export const registerStart = () => {
  return {
    type: REGISTER_START,
  };
};
export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};
export const registerFailed = () => {
  return {
    type: REGISTER_FAILED,
  };
};
export const logoutStart = () => {
  return {
    type: LOGOUT_START,
  };
};
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
export const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED,
  };
};

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  userService
    .Login(user)
    .then((res) => {
      dispatch(createAction(LOGIN_SUCCESS, res.data));
      localStorage.setItem('token', JSON.stringify(res.data));
      console.log('token', user);
      navigate('/');
    })
    .catch((err) => {
      console.log(err);
      dispatch(loginFailed());
    });
};
//REGISTER
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  userService
    .Register(user)
    .then((res) => {
      dispatch(createAction(REGISTER_SUCCESS, res.data));
      navigate('/login');
    })
    .catch((err) => {
      console.log(err);
      dispatch(registerFailed());
    });
};
//LOGOUT
export const logoutUser = async (
  id,
  dispatch,
  navigate,
  token,
  accessToken,
  axiosJWT
) => {
  dispatch(logoutStart());
  try {
    await axiosJWT.post('http://localhost:8000/v1/auth/logout', id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(logoutSuccess());
  } catch (err) {
    dispatch(logoutFailed());
  }
};

export const updateUser = (id, item, accessToken) => {
  return (dispatch) => {
    userService
      .updateUser(id, item, accessToken)
      .then((res) => {
        dispatch(createAction(UPDATE_USER, res.data));
        Swal.fire('Update Successfully...', '', 'success');
      })
      .catch((err) => console.log(err));
  };
};
