import './style.css';

import React, { useEffect } from 'react';
import Clock from '../../../../components/flashsale/Clock';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../../../../components/cards/Card';

const EveryFlashSale = (listProducts) => {
  console.log('listProducts', listProducts.listProducts);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="every-flash-sale">
      <div className="header-sale">
        <img
          src="https://clickbuy.com.vn/assets/home/flash-sale-moi-ngay.png"
          alt="sale"
        />
        <Clock />
      </div>
      <div className="product-sale">
        <Slider {...settings}>
          {listProducts.listProducts?.map((item, idex) => (
            <Card card={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EveryFlashSale;
