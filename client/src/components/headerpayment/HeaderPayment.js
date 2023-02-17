import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
export const HeaderPayment = () => {
  return (
    <div className="header-payment">
      <Link to="/">
        <span>
          <ArrowLeftIcon />
          Mua thêm sản phẩm
        </span>
      </Link>
      <span>Giỏ hàng của bạn</span>
    </div>
  );
};
