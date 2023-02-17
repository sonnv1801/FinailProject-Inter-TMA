import React from 'react';
import './style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
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
      <div className="main">
        <form className="login" action="#">
          <div className="title">Wellcome!</div>
          <p className="title-input">Username</p>
          <div class="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="your username"
              aria-label="Username"
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

          <div
            className="d-flex mb-5 align-items-center"
            data-selected="true"
            data-label-id="0"
          >
            <span className="ml-auto">
              <a href="#!" className="forgot-pass">
                Remember me
              </a>
            </span>
            <label className="switch">
              <input type="checkbox" />
              <span classv="slider round"></span>
            </label>
          </div>
          <button type="button" className="btn btn-danger">
            LOGIN
          </button>
          <Link to={'/register'}>
            <button type="button" className="btn btn-danger">
              REGISTER
            </button>
          </Link>

          <p className="forgot">you forgot password?</p>
        </form>
      </div>
    </>
  );
}

export default Login;
