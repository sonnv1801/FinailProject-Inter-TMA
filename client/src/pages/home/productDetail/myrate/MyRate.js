import React from 'react';
import './style.css';
import { useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
const MyRate = () => {
  const [number, setNumber] = useState(0);
  const [hoverStar, setHoverStar] = useState(undefined);

  const handleText = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Đánh giá';
      case 1:
        return 'Không hài lòng';
      case 2:
        return 'Tệ';
      case 3:
        return 'Bình thường';
      case 4:
        return 'Tốt';
      case 5:
        return 'Rất tốt';
      default:
        return 'Đánh giá';
    }
  };

  const handlePlaceHolder = () => {
    switch (number || hoverStar) {
      case 0:
        return 'Bình luận ở đây...';
      case 1:
      case 2:
      case 3:
      case 4:
        return 'Bạn đang gặp vấn đề gì';
      case 5:
        return 'Tại sao bạn thích sản phẩm của chúng tôi';
      default:
        return 'Bình luận ở đây...';
    }
  };
  return (
    <div className="my-rate">
      <b>Đánh giá của bạn</b>
      <form>
        <p className="text-rate">{handleText()}</p>
        <p className="star-rate">
          {Array(5)
            .fill()
            .map((_, index) =>
              number >= index + 1 || hoverStar >= index + 1 ? (
                <AiFillStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: 'orange' }}
                  onClick={() => setNumber(index + 1)}
                />
              ) : (
                <AiOutlineStar
                  onMouseOver={() => !number && setHoverStar(index + 1)}
                  onMouseLeave={() => setHoverStar(undefined)}
                  style={{ color: 'orange' }}
                  onClick={() => setNumber(index + 1)}
                />
              )
            )}
        </p>
        <b>Nhận xét của bạn*</b>
        <textarea
          className="my-text-rate"
          placeholder={handlePlaceHolder()}
        ></textarea>
        <b>Tên*</b>
        <input
          type="text"
          className="my-text-rate"
          placeholder="Nhập tên của bạn..."
        />
        <b>Email*</b>
        <input
          type="email"
          className="my-text-rate"
          placeholder="Nhập email của bạn ..."
        />
        <button className="btn-rate">Gửi đi</button>
      </form>
    </div>
  );
};

export default MyRate;
