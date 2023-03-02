import React, { useState } from 'react';
import './style.css';
function ListOderAdmin() {
  return (
    <div className="container-listOderAd">
      <div className="title-list">
        <div className="row">
          <div className="col-sm-5">
            <p>Oders Management</p>
          </div>
        </div>
      </div>
      <table className="table">
        <thead classNane="table-dark">
          <tr>
            <th>Mã hóa đơn</th>
            <th>Thời gian</th>
            <th>Khách hàng</th>
            <th>Tổng tiền hàng</th>
            <th>Trạng thái</th>
            <th>Xem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#ABCDF</td>
            <td>Ai mà nhớ</td>
            <td>Báo thủ</td>
            <td>
              <p>20.000.000 đ</p>
            </td>
            <td>Iphone</td>
            <td>
              <button className="btn btn-success">
                <i class="bx bx-edit"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ListOderAdmin;
