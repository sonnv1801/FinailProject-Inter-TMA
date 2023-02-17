import React from 'react';
import './style.css';

export const HeaderOrder = () => {
  return (
    <div className="header-order-container">
      <p>Cảm ơn bạn. Đơn hàng của bạn đã được nhận</p>
      <div className="sub-header-order">
        <span>Mã đơn hàng</span>
        <b>1213214</b>
        <span>Ngày</span>
        <b>1213214</b>
        <span>Tổng</span>
        <b>1213214</b>
        <span>Phương thức thanh toán</span>
        <b>1213214</b>
      </div>
      <p>Trả tiền mặt khi giao hàng</p>
      <b>Chi tiết đơn hàng</b>
      <div className="footer-order">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sản phẩm</th>
              <th scope="col">Tổng</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                iPhone 14 128GB chính hãng VNA - Purple × 1{' '}
                <span>Màu sắc: Purple</span>
              </td>
              <td>19,990,000 ₫</td>
            </tr>
            <tr>
              <td>Tổng số phụ:</td>
              <td>19,990,000 ₫</td>
            </tr>
            <tr>
              <td>Giao nhận hàng:</td>
              <td>Express</td>
            </tr>
            <tr>
              <td>Phương thức thanh toán:</td>
              <td>Trả tiền mặt khi nhận hàng</td>
            </tr>
            <tr>
              <td>Tổng cộng:</td>
              <td>19,990,000 ₫</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
