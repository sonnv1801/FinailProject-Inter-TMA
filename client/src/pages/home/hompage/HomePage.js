import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaCard from '../../../components/cards/Card';
import Carousel from '../../../components/carousel/Carousel';
import Menu from '../../../components/menu/Menu';
import Repost from '../../../components/repost/Repost';
import TitleHead from '../../../components/title/TitleHead';
import {
  getProduct,
  getProduct10days,
} from '../../../redux/actions/product.action';
import { getAllTypeProduct } from '../../../redux/actions/typeProduct.action';
import EveryFlashSale from './everyflashsale/EveryFlashSale';
import './style.css';
import SubNav from './subnav/SubNav';
import TypeNav from './typenav/TypeNav';

const HomePage = () => {
  const listProduct = useSelector((state) => state.defaultReducer.listProduct);
  const listProduct10Days = useSelector((state) => state.defaultReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    dispatch(getProduct10days());
  }, []);

  const listType = useSelector((state) => state.defaultReducer.listType);
  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);

  const fliterTypeSamsung = listType.filter(function (type, index, array) {
    return type.name === 'Samsung';
  });
  const fliterProductIphone = listProduct.filter(function (
    product,
    index,
    array
  ) {
    return product.type === 'Iphone';
  });

  const fliterProductSamsung = listProduct.filter(function (
    product,
    index,
    array
  ) {
    return product.type === 'Samsung';
  });
  return (
    <div className="main-home">
      <SubNav />
      <div className="row">
        <div className="col-xl-3" style={{ width: '20%' }}>
          <div className="menu-home">
            <Menu product={listProduct} />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="menu-home">
            <Carousel />
            <TypeNav />
          </div>
        </div>
        <div className="col-xl-3" style={{ width: '20%' }}>
          <div className="menu-home">
            <Repost />
          </div>
        </div>
      </div>
      <EveryFlashSale listProducts={listProduct10Days} />
      <TitleHead typeProduct={listType} />
      <div className="card-product-home">
        <div className="row">
          {fliterProductIphone.map((item, index) => (
            <div className="col-xl-3 mt-3" key={index}>
              <MediaCard card={item} />
            </div>
          ))}
        </div>
      </div>
      <TitleHead typeProduct={listType} />
      <div className="card-product-home">
        <div className="row">
          {fliterProductSamsung.map((item, index) => (
            <div className="col-xl-3 mt-3" key={index}>
              <MediaCard card={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
