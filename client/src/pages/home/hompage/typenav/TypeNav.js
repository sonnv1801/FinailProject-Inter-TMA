import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const TypeNav = () => {
  return (
    <>
      <div className="type-nav">
        <ul>
          <Link to="/">
            <li>Đặt Hàng Galaxy S23 Serie</li>
          </Link>
          <Link to="/">
            <li>Đặt Hàng Galaxy S23 Serie</li>
          </Link>
          <Link to="/">
            <li>Đặt Hàng Galaxy S23 Serie</li>
          </Link>
          <Link to="/">
            <li>Đặt Hàng Galaxy S23 Serie</li>
          </Link>
          <Link to="/">
            <li>Đặt Hàng Galaxy S23 Serie</li>
          </Link>
        </ul>
      </div>
      <div className="nav-img">
        <Link to="/">
          <img
            src="https://clickbuy.com.vn/uploads/2023/01/bgw-iphone-chinh-hang-bao-hanh-24-thang-01.png"
            alt="...."
          />
        </Link>
      </div>
    </>
  );
};

export default TypeNav;
