import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../../components/cards/Card';
import Carousel from '../../../components/carousel/Carousel';
import Menu from '../../../components/menu/Menu';
import MiniCard from '../../../components/minicard/MiniCard';
import Repost from '../../../components/repost/Repost';
import TitleHead from '../../../components/title/TitleHead';
import EveryFlashSale from './everyflashsale/EveryFlashSale';
import './style.css';
import SubNav from './subnav/SubNav';
import TypeNav from './typenav/TypeNav';

const HomePage = () => {
  const user = useSelector(
    (state) => state.defaultReducer.login.currentUser?.email
  );

  return (
    <div className="main-home">
      <h1>{user}</h1>
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
      {/* {listUser?.map((item, index) => (
        <h1 key={index}>{item.address}</h1>
      ))} */}
    </div>
  );
};

export default HomePage;
