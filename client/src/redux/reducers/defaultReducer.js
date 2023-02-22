import {
  GET_USER,
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../type/types';

const initialState = {
  listUser: [],
  login: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
};

const defaultReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER: {
      state.listUser = payload;
      return { ...state }; //setState
    }
    case LOGIN_START: {
      state.login.isFetching = true;
      return { ...state };
    }
    case LOGIN_SUCCESS: {
      state.login.isFetching = false;
      state.login.currentUser = payload;
      state.login.error = false;
      return { ...state };
    }
    case LOGIN_FAILED: {
      state.login.isFetching = false;
      state.login.error = true;
      return { ...state };
    }
    default:
      return state;
  }
};

export default defaultReducer;
