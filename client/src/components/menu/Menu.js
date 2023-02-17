import * as React from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import './style.css';
import { Link } from 'react-router-dom';

const PrductType = [
  {
    id: '1',
    name: 'Iphone',
    ip1: 'ip1',
  },
  {
    id: '2',
    name: 'LapTop',
  },
  {
    id: '3',
    name: 'Samsung',
  },
];
export default function Menu() {
  return (
    <div id="mainnav">
      <ul>
        {PrductType.map((item, index) => (
          <li className="thefirst" key={index}>
            <Link to="/">
              {item.name} <ArrowForwardIosOutlinedIcon className="icon-menu" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/shop">{item.ip1}</Link>
              </li>
              <li>
                <Link to="/shop">Iphone 14</Link>
              </li>
              <li>
                <Link to="/shop">Iphone 14</Link>
              </li>
              <li>
                <Link to="/shop">Iphone 14</Link>
              </li>
              <li>
                <Link to="/shop">Iphone 14</Link>
              </li>
              <li>
                <Link to="/shop">Iphone 14</Link>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
