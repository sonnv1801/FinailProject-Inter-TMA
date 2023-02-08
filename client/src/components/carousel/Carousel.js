import React from 'react';
import './style.css';

const banner = [
  {
    id: '1',
    image: 'https://clickbuy.com.vn/uploads/2023/01/GALAXY-S.png',
  },
  {
    id: '2',
    image:
      'https://clickbuy.com.vn/uploads/2022/10/slide-apple-watch-sr8-san-hang-01.png',
  },
  {
    id: '3',
    image: 'https://clickbuy.com.vn/uploads/2023/01/slide-xa-kho-laptop-01.png',
  },
];

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://clickbuy.com.vn/uploads/2023/02/slide-dat-hang-galaxy-s23-01-4.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          {banner.map((item) => (
            <div className="carousel-item" key={item.id}>
              <img src={item.image} className="d-block w-100" alt="..." />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
