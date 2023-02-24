import React, { useEffect } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import './style.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypeProduct } from '../../redux/actions/typeProduct.action';

export default function Menu() {
  const dispatch = useDispatch();
  const listType = useSelector((state) => state.defaultReducer.listType);
  useEffect(() => {
    dispatch(getAllTypeProduct());
  }, []);
  console.log(listType);
  return (
    <div id="mainnav">
      <ul>
        {listType.map((item, index) => (
          <li className="thefirst" key={index}>
            <Link to="/">
              {item.name} <ArrowForwardIosOutlinedIcon className="icon-menu" />
            </Link>
            <ul className="sub-menu">
              <li>
                <Link to="/shop">{item._id}</Link>
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
