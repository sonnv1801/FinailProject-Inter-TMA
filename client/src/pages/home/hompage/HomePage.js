import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../components/cards/Card';
import Carousel from '../../../components/carousel/Carousel';
import Menu from '../../../components/menu/Menu';
import MiniCard from '../../../components/minicard/MiniCard';
import Repost from '../../../components/repost/Repost';
import TitleHead from '../../../components/title/TitleHead';
import { getUsers } from '../../../redux/actions/user.action';
import EveryFlashSale from './everyflashsale/EveryFlashSale';
import './style.css';
import SubNav from './subnav/SubNav';
import TypeNav from './typenav/TypeNav';

const HomePage = () => {
  const dispatch = useDispatch();

  //Gọi API khi vào component
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  //Lấy dữ liệu từ Reducer
  const listUser = useSelector((state) => state.defaultReducer.listUser);

  console.log(listUser);

  return (
    <div className="main-home">
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
      <EveryFlashSale />
      <TitleHead />
      <div className="card-product-home">
        <div className="row">
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
          <div className="col-xl-3 mt-3">
            <Card />
          </div>
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
      {listUser?.map((item, index) => (
        <h1 key={index}>{item.address}</h1>
      ))}
    </div>
  );
};

export default HomePage;
