import React from 'react';
import './style.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
const ratingChanged = (newRating) => {
  console.log(newRating);
};
function Card() {
  return (
    <Link to="/product-detail">
      <div>
        <div className="container">
          <div className="card">
            <img
              className="card-img-top"
              src="https://clickbuy.com.vn/uploads/2021/06/ipad.jpg"
              alt="Card"
            />
            <div className="card-body">
              <p className="title">
                San pham Some example text some example text
              </p>
              <p className="price">10.000.000 đ</p>
              <div
                className="rating"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'left',
                }}
              >
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={20}
                  activeColor="#ffd700"
                />
                <i
                  className="rating-info"
                  style={{ fontSize: '10px', margin: '10px 0px 0px 5px' }}
                >
                  100 luot danh gia
                </i>{' '}
              </div>
            </div>

            <div className="card-info">
              <ul>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
                <li>ABC</li>
              </ul>
            </div>
            <div className="voucher"> Giảm 19%</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
