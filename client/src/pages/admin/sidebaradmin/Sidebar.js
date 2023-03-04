import React from 'react';
import './style.css';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="title-admin">
          <img className="logo-sidebar" src={logo} alt="..." />
          <p>Admin: Philip</p>
        </div>
        <ul className="nav-link-sidebar">
          <li>
            <Link to={'/admin/user'}>
              <i class="bx bxs-user-pin"></i>
              <span claName="link-name">Quản lý user</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/product'}>
              <i class="bx bxs-devices"></i>
              <span className="link-name">Quản lý sản phẩm</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/type'}>
              <i class="bx bxs-user-pin"></i>
              <span claName="link-name">Quản lý Mặt hàng</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/orders'}>
              <i class="bx bxs-receipt"></i>
              <span className="link-name">Quản lý đơn hàng</span>
            </Link>
          </li>
          <li>
            <Link to={'/admin/orders/today'}>
              <i class="bx bxs-receipt"></i>
              <span className="link-name">Đơn Hàng Hôm Nay</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
