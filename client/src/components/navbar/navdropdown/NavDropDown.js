import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const NavDropDown = () => {
  return (
    <div className="nav-dropdown">
      <div className="sub-nav-down">
        <img
          src="https://filethcs.hcm.edu.vn/UploadImages/thcskhanhbinh/ho-chi-minh.png?w=1130"
          alt="..."
        />
        <ul>
          <li>
            <Link to="/login">Đăng nhập</Link>
          </li>
          <li>
            <Link to="/profile">Trang cá nhân</Link>
          </li>
          <li>
            <Link to="/">Đăng xuất</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
