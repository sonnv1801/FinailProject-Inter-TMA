import numeral from 'numeral';
import React from 'react';
import { useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder } from '../../../../redux/actions/order.action';
import './style.css';

export const HeaderOrder = () => {
  const currentUser = JSON.parse(localStorage.getItem('token'));
  const orders = useSelector((state) => state.defaultReducer.listOrder);
  const dispatch = useDispatch();
  useEffect(() => {
    // if (currentUser?._id === orders.customer) {
    // }
    dispatch(getOrder());
  }, []);

  const fliterOrder = orders.filter(function (product, index, array) {
    console.log('prd....', product.customer.customerId === currentUser._id);
    return product.customer.customerId === currentUser._id;
  });

  const renderAmount = () => {
    return fliterOrder.reduce((total, item) => {
      return (total += item.total);
    }, 0);
  };

  console.log(renderAmount());

  console.log('fliterOrder.products', fliterOrder);
  return (
    <>
      {fliterOrder.length === 0 ? (
        <div class="alert alert-danger" role="alert" style={{ margin: '2rem' }}>
          Hiện Tại Chưa Có Hóa Đơn Nào - Mua Thêm Đi!!!
          <div
            class="spinner-border text-danger"
            role="status"
            style={{ float: 'right' }}
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="header-order-container">
          <p>Cảm ơn bạn. Đơn hàng của bạn đã được nhận</p>
          {fliterOrder.map((item, index) => (
            <div className="sub-header-order" key={index}>
              <p>
                {item.status === 0
                  ? 'Đang Chờ Xử Lý'
                  : 'Đã Xử Lý - Vui Lòng Ra Cửa Hàng Gần Nhất Để Nhận'}
              </p>
              <span>Mã Đơn {index} </span>
              <b>{item._id}</b>
              <span>Ngày</span>
              <b>{moment(item.createdAt).format('DD/MM/YYYY')}</b>
              <span>Tổng</span>
              <b>{`${numeral(item.total).format('0,0')}đ`}</b>
              <span>Phương thức thanh toán</span>
              <b>Thanh Toán Khi Nhận</b>
            </div>
          ))}
          <p>Trả tiền mặt khi giao hàng</p>
          <b>Chi tiết đơn hàng</b>
          <div className="footer-order">
            {fliterOrder.map((item, index) => (
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Mã Đơn Hàng {index}</th>
                    <th scope="col">Tổng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>{item._id}</span>
                    </td>
                    <td> {`${numeral(item.total).format('0,0')}đ`}</td>
                  </tr>
                </tbody>
              </table>
            ))}
            <table class="table" style={{ textAlign: 'center' }}>
              <thead>
                <tr>
                  <th scope="col">Tổng Hóa Đơn Của Bạn:</th>
                  <th scope="col">{`${numeral(renderAmount()).format(
                    '0,0'
                  )}đ`}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      )}
    </>
  );
};
