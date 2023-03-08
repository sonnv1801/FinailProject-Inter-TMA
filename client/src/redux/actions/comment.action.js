import Swal from 'sweetalert2';
import { createAction } from '.';
import { commentSevice } from '../../services';
import { ADD_CMT, FETCH_CMT, START_LOADING, STOP_LOADING } from '../type/types';

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

export const getCMT = () => {
  return (dispatch) => {
    dispatch(startLoading());
    commentSevice
      .getCmt()
      .then((res) => {
        dispatch(createAction(FETCH_CMT, res.data));
        dispatch(stopLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(stopLoading());
      });
  };
};

export const createCmt = (id, accessToken) => {
  return (dispatch) => {
    Swal.fire({
      title: 'Xác nhận đánh giá của bạn?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'OK !',
    })
      .then((result) => {
        if (result.isConfirmed) {
          commentSevice.createCmt(id, accessToken).then((res) => {
            dispatch(createAction(ADD_CMT, res.data));
          });
          Swal.fire('Đánh giá thành công - Chờ Admin duyệt!', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
