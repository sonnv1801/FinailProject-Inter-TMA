import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
export const HeaderPayment = () => {
  return (
    <div className="header-payment">
      <Link to="/">
        <button className="btn btn-outline-danger">
          {' '}
          <i class="bx bxs-cart-add"></i>Mua thêm
        </button>
      </Link>
    </div>
  );
};
