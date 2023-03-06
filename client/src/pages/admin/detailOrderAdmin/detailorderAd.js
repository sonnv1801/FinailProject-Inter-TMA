import React from 'react';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function DetailorderAd() {
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
                <p style={{ fontWeight: 'bold' }}>Người gửi:</p>
                <p>Số điện thoại:</p>
                <p>Địa chỉ:</p>
                <p>Ghi chú:</p>
              </div>
              <div className="col-sm-6">
                <p style={{ fontWeight: 'bold' }}>Người nhận:</p>
                <p>Số điện thoại:</p>
                <p>Địa chỉ:</p>
                <p>Ghi chú:</p>
              </div>
            </div>
          </div>

          <table className="table">
            <thead classNane="table-dark">
              <h4>Nội dung đơn hàng</h4>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC</td>
                <td>ABC</td>
                <td>ABC</td>
                <td>ABC</td>
              </tr>
            </tbody>
          </table>
          <table className="table">
            <thead classNane="table-dark">
              <h4>Giao hàng - Thanh toán</h4>
              <tr>
                <th>Ngày đặt hàng</th>
                <th>Ngày nhận hàng</th>
                <th>Phương thức thanh toán</th>
                <th>Phí vận chuyển</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ABC</td>
                <td>ABC</td>
                <td>ABC</td>
                <td>ABC</td>
              </tr>
            </tbody>
          </table>
          <div className="foot-row">
            <div className="row">
              <div className="col-sm-6">
                <h5>Tiền thu người nhận</h5>
                <h1>Thu: 1.000.000 đ</h1>
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
