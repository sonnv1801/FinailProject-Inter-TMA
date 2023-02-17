import React from 'react';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './style.css';
export const BodyProduct = () => {
  return (
    <div className="body-product">
      <b>Chọn theo tiêu chí</b>
      <div className="sub-body-product">
        <select>
          <option selected>$ Giá</option>
          <option>Dưới 3 triệu</option>
          <option>Dưới 5 triệu</option>
          <option>Dưới 8 triệu</option>
        </select>
        <select>
          <option selected>Bộ nhớ trong</option>
          <option>8 Gb</option>
          <option>16 Gb</option>
          <option>32 Gb</option>
        </select>
      </div>
      <b>Sắp xếp theo</b>
      <div className="sub-body-arrange">
        <Link to="/">
          <i>
            <ArrowUpwardIcon /> Giá thấp - cao
          </i>
        </Link>
        <Link to="/">
          <i>
            <ArrowDownwardIcon /> Giá cao - thấp
          </i>
        </Link>
        <Link to="/">
          <i>
            <VisibilityIcon /> Xem nhiều
          </i>
        </Link>
      </div>
    </div>
  );
};
