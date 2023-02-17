import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Register() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <>
      <div className="register-page">
        <form className="register" action="#" method="post">
          <div className="title">Register!</div>
          <p className="title-input">Username</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <p className="title-input">Email</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>
          <p className="title-input">Password</p>
          <div className="input-group mb-3">
            <input
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name="password"
              className="form-control"
              placeholder="your password"
              id="form-password"
            />
            <span className="input-group-text" id="basic-addon1">
              <i onClick={togglePassword}>
                {passwordType === 'password' ? (
                  <i className="fa fa-eye"></i>
                ) : (
                  <i className="fa fa-eye-slash"></i>
                )}
              </i>
            </span>
          </div>
          <p className="title-input">Phone</p>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="your phone"
              aria-label="Phone"
              aria-describedby="basic-addon1"
            />
          </div>
          <p className="title-input">Address</p>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your address"
              aria-label="Address"
              aria-describedby="basic-addon1"
            />
          </div>
          <Link to={'/home'}>
            <button type="button" className="btn btn-danger">
              DONE
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}

export default Register;
