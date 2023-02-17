import { GET_USER } from '../type/types';

const initialState = {
  listUser: [],
};

const defaultReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_USER: {
      state.listUser = payload;
      return { ...state }; //setState
    }
    default:
      return state;
  }
};

export default defaultReducer;
