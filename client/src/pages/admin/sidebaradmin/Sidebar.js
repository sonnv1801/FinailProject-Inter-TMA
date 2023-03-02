import React from 'react';
import './style.css';
import logo from '../../../assets/logo.png';
function Sidebar() {
  return (
    <>
      <div className="sidebar-container">
        <div className="title-admin">
          <img className="logo-sidebar" src={logo} />
          <p>Admin: Philip</p>
        </div>
        <ul className="nav-link-sidebar">
          <li>
            <a href="">
              <i class="bx bxs-user-pin"></i>
              <span className="link-name">Quản lý user</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bxs-devices"></i>
              <span className="link-name">Quản lý sản phẩm</span>
            </a>
          </li>
          <li>
            <a href="">
              <i class="bx bxs-receipt"></i>
              <span className="link-name">Quản lý đơn hàng</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
