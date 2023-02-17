import React from 'react';
import './style.css';
import StarIcon from '@mui/icons-material/Star';
import MyRate from '../myrate/MyRate';

const rate = [
  {
    id: 1,
    rate: 1,
    quantity: 1,
    progress: '10%',
  },
  {
    id: 2,
    rate: 2,
    quantity: 2,
    progress: '20%',
  },
  {
    id: 3,
    rate: 3,
    quantity: 5,
    progress: '50%',
  },
  {
    id: 4,
    rate: 4,
    quantity: 4,
    progress: '40%',
  },
  {
    id: 5,
    rate: 5,
    quantity: 5,
    progress: '50%',
  },
];

const RateProduct = () => {
  return (
    <div className="rate-product">
      <b>Đánh giá & Nhận xét iPhone 14 Pro Max 128GB chính hãng VNA</b>
      <div className="header-rate">
        <div className="sub-header-left">
          <b>
            4.45 <StarIcon />
          </b>
          <i>(157 đánh giá và nhận xét)</i>
        </div>
        {rate.map((item, index) => (
          <div className="sub-header-right" key={index}>
            <span>{item.rate} sao</span>
            <div className="rating" style={{ width: `${item.progress}` }}></div>
            <span>{item.quantity} đánh giá</span>
          </div>
        ))}
      </div>
      <div className="vote-rate">
        <h1>Hãy cho tôi biết ý kiến của bạn</h1>
        <button>Gửi đánh giá</button>
      </div>
      <div className="body-rate">
        <p>157 đánh giá cho iPhone 14 Pro Max 128GB chính hãng VNA</p>
        <div className="sub-body-rate">
          <div className="info-rate">
            <span>Phúc – 11/02/2023</span>
            <b>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </b>
          </div>
          <p>
            Tính hộ mình trả trước 80% góp 6 thág qua HDsaison thì lãi xuất kèm
            góp hàng thág như nào ạ
          </p>
          <div className="info-rate">
            <span>Phúc – 11/02/2023</span>
            <b>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </b>
          </div>
          <p>
            Tính hộ mình trả trước 80% góp 6 thág qua HDsaison thì lãi xuất kèm
            góp hàng thág như nào ạ
          </p>
          <div className="info-rate">
            <span>Phúc – 11/02/2023</span>
            <b>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </b>
          </div>
          <p>
            Tính hộ mình trả trước 80% góp 6 thág qua HDsaison thì lãi xuất kèm
            góp hàng thág như nào ạ
          </p>
          <div className="info-rate">
            <span>Phúc – 11/02/2023</span>
            <b>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </b>
          </div>
          <p>
            Tính hộ mình trả trước 80% góp 6 thág qua HDsaison thì lãi xuất kèm
            góp hàng thág như nào ạ
          </p>
        </div>
      </div>
      <MyRate />
    </div>
  );
};

export default RateProduct;
