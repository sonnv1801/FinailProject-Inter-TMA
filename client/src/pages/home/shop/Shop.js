import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../components/cards/Card';
import NavProduct from '../../../components/navproduct/NavProduct';
import { BodyProduct } from './bodyproduct/BodyProduct';
import { MenuShop } from './menushop/MenuShop';
import './style.css';
const Shop = () => {
  return (
    <>
      <NavProduct />
      <div className="shop-container">
        <MenuShop />
        <BodyProduct />
        <div className="shop-product">
          <div className="row">
            <div className="col-3 mb-2">
              <Card />
            </div>
            <div className="col-3 mb-2">
              <Card />
            </div>
            <div className="col-3 mb-2">
              <Card />
            </div>
            <div className="col-3 mb-2">
              <Card />
            </div>
            <div className="col-3 mb-2">
              <Card />
            </div>
            <div className="col-3">
              <Card />
            </div>
          </div>
        </div>
        <div className="see-more">
          <button>
            <Link to="/">Xem thêm</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
