import React from 'react';
import './style.css';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function Card(props) {
  // console.log('list', props.card);
  return (
    <Link to="/product-detail">
      <div>
        <div className="container">
          <div className="card">
            <img className="card-img-top" src={props.card?.image} alt="Card" />
            <div className="card-body">
              <p className="title">{props.card?.title}</p>
              <del
                className="title"
                style={{ textDecoration: 'line-through', opacity: '0.7' }}
              >
                {props.card?.oldPrice}
              </del>
              <p className="price">{props.card?.newPrice}</p>
              <p>{props.card?.description}</p>
              <div
                className="rating"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'left',
                }}
              >
                <span id="rates">
                  <ReactStars count={props.card?.rates} size={20} />
                </span>
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
                <li>Status: {props.card?.status}</li>
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
