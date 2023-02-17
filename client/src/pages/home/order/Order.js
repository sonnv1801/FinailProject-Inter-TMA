import React from 'react';
import { HeaderPayment } from '../../../components/headerpayment/HeaderPayment';
import { HeaderOrder } from './HeaderOrder/HeaderOrder';
import './style.css';
export const Order = () => {
  return (
    <>
      <p className="title-order">Hóa đơn của bạn</p>
      <div className="order-container">
        <HeaderPayment />
        <HeaderOrder />
      </div>
    </>
  );
};
