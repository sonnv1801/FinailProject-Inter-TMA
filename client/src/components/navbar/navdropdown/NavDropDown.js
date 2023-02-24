import React from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';

export const NavDropDown = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const user = JSON.parse(localStorage.getItem('token'));

  console.log(user?.role);

  return (
    <div className="nav-dropdown">
      <div className="sub-nav-down">
        <img
          src="https://filethcs.hcm.edu.vn/UploadImages/thcskhanhbinh/ho-chi-minh.png?w=1130"
          alt="..."
        />
        <ul>
          {user ? (
            <>
              <li>
                <Link to="/login">{user?.role}</Link>
                <h1>{user?.role}</h1>
              </li>
              <li>
                <button onClick={handlelogout}>Đăng xuất</button>
              </li>
              <li>
                <Link to="/profile">Trang cá nhân</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Đăng nhập</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};
