import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebaradmin/Sidebar';
import './style.css';
function ListOderAdmin() {
  return (
    <div className="container-listOderAd">
      <div className="row">
        <div className="col-3">
          <Sidebar />
        </div>
        <div className="col-9">
          <div className="title-list">
            <div className="row">
              <div className="col-sm-5">
                <p>Quản lý Đơn hàng</p>
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
                <th>Chi tiết</th>
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
                  <Link to={'/admin/detailorder'}>
                    <button className="btn btn-success">
                      <i class="bx bx-edit"></i>
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListOderAdmin;
