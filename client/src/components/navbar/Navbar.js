import React from 'react';
import './style.css';
import logo from '../../assets/logo.png';
import { NavDropDown } from './navdropdown/NavDropDown';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
      <div className="clear-div-top"></div>
      <nav className="nav_container">
        <div className="navbar">
          <div className="left">
            <Link to="/" className="active">
              <img className="logo" src={logo} alt="..." />
            </Link>
            <form className="form-inline">
              <input
                style={{ margin: '0 10px' }}
                className="form-control"
                type="text"
                placeholder="Search"
              ></input>
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="right">
            <div className="row">
              <div className="area col-sm-3">
                <select>
                  <option selected>Khu vực của bạn</option>
                  <option selected>Miền Nam</option>
                  <option selected>Miền Bắc</option>
                </select>
              </div>
              <div className="area col-sm-3">
                <a href="tel:0375521434">
                  <p>Gọi mua hàng qua số điện thoại</p>
                  <p>0375521434</p>
                </a>
              </div>
              <div className="area col-sm-3">
                <Link to="/payment">
                  <p>Chi tiết</p>
                  <p>Giỏ hàng</p>
                </Link>
              </div>
            </div>
          </div>
          <NavDropDown />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
