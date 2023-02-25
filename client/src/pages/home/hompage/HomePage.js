import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MediaCard from '../../../components/cards/Card';
import Carousel from '../../../components/carousel/Carousel';
import Menu from '../../../components/menu/Menu';
import MiniCard from '../../../components/minicard/MiniCard';
import Repost from '../../../components/repost/Repost';
import TitleHead from '../../../components/title/TitleHead';
import { getProduct } from '../../../redux/actions/product.action';
import { getAllTypeProduct } from '../../../redux/actions/typeProduct.action';
import EveryFlashSale from './everyflashsale/EveryFlashSale';
import './style.css';
import SubNav from './subnav/SubNav';
import TypeNav from './typenav/TypeNav';

const HomePage = () => {
  const listProduct = useSelector((state) => state.defaultReducer.listProduct);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);

  const listType = useSelector((state) => state.defaultReducer.listType);
  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);
  // console.log('type', listType);

  const fliterTypeSamsung = listType.filter(function (type, index, array) {
    return type.name === 'Samsung';
  });
  console.log('fliterTypeSamsung', fliterTypeSamsung);
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
  // console.log('fliterProductIphone', fliterProductIphone);
  // console.log('fliterProductSamsung', fliterProductSamsung);
  return (
    <div className="main-home">
      {/* <h1>{user}</h1> */}
      <SubNav />
      <div className="row">
        <div className="col-xl-3" style={{ width: '20%' }}>
          <div className="menu-home">
            <Menu />
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
      <EveryFlashSale listProducts={listProduct} />
      <TitleHead typeProduct={fliterTypeSamsung} />
      <div className="card-product-home">
        <div className="row">
          {fliterProductIphone.map((item, index) => (
            <div className="col-xl-3 mt-3" key={index}>
              <MediaCard card={item} />
            </div>
          ))}
        </div>
      </div>
      {/* <TitleHead typeProduct={listType} /> */}
      <div className="card-product-home">
        <div className="row">
          {fliterProductSamsung.map((item, index) => (
            <div className="col-xl-3 mt-3" key={index}>
              <MediaCard card={item} />
            </div>
          ))}
        </div>
      </div>
      <TitleHead />
      <div className="mini-card-home">
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
        <MiniCard />
      </div>
      {/* {listUser?.map((item, index) => (
        <h1 key={index}>{item.address}</h1>
      ))} */}
    </div>
  );
};

export default HomePage;
