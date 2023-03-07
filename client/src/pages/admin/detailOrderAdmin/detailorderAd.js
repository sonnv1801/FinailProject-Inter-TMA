import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getDetailOrder } from '../../../redux/actions/order.action';
import { getProduct } from '../../../redux/actions/product.action';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function DetailorderAd() {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split('/')[3];
  const listOrder = useSelector((state) => state.defaultReducer.orderDetail);

  // const fliterOrderPrd = listProductAdmin.filter(function (
  //   product,
  //   index,
  //   array
  // ) {
  //   return product._id === listOrder.products.productId;
  // });
  // console.log(fliterOrderPrd);
  useEffect(() => {
    dispatch(getDetailOrder(path));
  }, []);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const renderAmount = () => {
    return listOrder?.products?.reduce((total, item) => {
      return (total += item.newPrice * item.quantity);
    }, 0);
  };
  return (
    <div className="container-DetailorderAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="title-detail">Thông tin chi tiết đơn hàng</div>
          </div>
          <div className="first-row">
            <div className="row">
              <div className="col-sm-6">
                <p style={{ fontWeight: 'bold' }}>
                  Người gửi: <b>MAIZOSHOP</b>
                </p>
                <p>
                  Số điện thoại: <b>037.5521.434</b>
                </p>
                <p>
                  Địa chỉ: <b>Nghĩa Trung - Tư Nghĩa - Quảng Ngãi</b>
                </p>
              </div>
              <div className="col-sm-6">
                <p style={{ fontWeight: 'bold' }}>
                  Người nhận: {listOrder?.customer?.fullname}
                </p>
                <p>
                  Số điện thoại: <b>{listOrder?.customer?.phone}</b>
                </p>
                <p>
                  Địa chỉ: <b>{listOrder?.customer?.address}</b>
                </p>
                <p>
                  Ghi chú: <b>{listOrder?.customer?.notes}</b>
                </p>
              </div>
            </div>
          </div>

          <table className="table">
            <thead classNane="table-dark">
              <h4>Nội dung đơn hàng</h4>

              <tr>
                <th>#</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Màu</th>
                <th>Bộ Nhớ</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {listOrder?.products?.map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.newPrice?.toLocaleString()}đ</td>
                  <td>{item.color}</td>
                  <td>{item.store}</td>
                  <td>{(item.quantity * item.newPrice).toLocaleString()}đ</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="table">
            <thead classNane="table-dark">
              <h4>Giao hàng - Thanh toán</h4>

              <tr>
                <th>Ngày đặt hàng</th>
                <th>Phương thức thanh toán</th>
                <th>Phí vận chuyển</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{moment(listOrder?.createdAt).format('DD/MM/YYYY')}</td>
                <td>Nhận Hàng Khi Thanh Toán</td>
                <td>Miễn phí</td>
              </tr>
            </tbody>
          </table>
          <div className="foot-row">
            <div className="row">
              <div className="col-sm-6">
                <h5>Tiền thu người nhận</h5>
                <h1>Thu: {renderAmount()?.toLocaleString()}đ</h1>
                <br />
              </div>
              <div className="col-sm-6">
                <h5>Chữ ký người nhận</h5>
                <br />
                <br />
                <p>Xác nhận hàng nguyên vẹn, không móp/méo, bể/vỡ.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailorderAd;
